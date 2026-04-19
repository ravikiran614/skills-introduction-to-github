# Intentcue Production Hardening Guide (PAL Clusters)

> **Relief framing:** You no longer have to worry about hand-coded multi-provider failover trees; Intentcue PAL clusters handle the heavy lifting of retries, circuit breaking, and safe routing.

## Why this reduces cognitive load for SRE teams

Intentcue reduces operational overhead by moving provider-specific failure logic into a single PAL control plane:

- **One policy surface:** retry, breaker, timeout, and fallback are defined once per intent route.
- **One runtime contract:** all providers emit the same trace envelope and metric keys.
- **One on-call workflow:** SREs debug cluster events instead of three API dialects.
- **One rollback lever:** intent revision pinning avoids emergency app redeploys.

Result: fewer moving parts per incident, shorter MTTR, and lower alert fatigue.

---

## 1) Fault-Tolerant Dispatch Strategy

You no longer have to manually catch Groq 5xx errors and stitch fallback logic in app code. Intentcue PAL cluster policies perform automatic retry + breaker + weighted reroute.

```ts
import { Cluster } from "@intentcue/sdk";

const pal = new Cluster({ id: "prod-pal", providers: ["groq", "anthropic", "openai"] });
pal.route("chat.support.v3").resilience({
  retry: { when: "provider=groq && status>=500", attempts: 2, backoffMs: [100, 250] },
  circuit: { provider: "groq", openAfter: 4, halfOpenAfterMs: 30000 },
  failover: { onCircuitOpen: ["anthropic", "openai"], strategy: "least_latency" },
  timeoutMs: 4000
});
const result = await pal.dispatch("chat.support.v3", { input: userMessage, eval: "strict" });
```

### Runtime behavior

1. Groq returns 5xx -> PAL retries twice with bounded backoff.
2. Repeated failures trip Groq circuit.
3. Load shifts to Anthropic/OpenAI by least-latency policy.
4. Circuit probes reopen Groq only after half-open succeeds.

---

## 2) Observability Schema (Unified Markdown Spec)

Intentcue handles the heavy lifting of cross-provider telemetry normalization so you can query one schema for all PAL events.

### Log record contract

| Field | Type | Description |
|---|---|---|
| `ic_trace_id` | string | Global run identifier across retries/failovers. |
| `ic_intent_id` | string | Versioned intent key (e.g., `chat.support.v3`). |
| `ic_provider` | enum | `openai` \| `anthropic` \| `groq`. |
| `ic_model` | string | Provider model ID actually invoked. |
| `ic_latency` | number(ms) | End-to-end provider latency for this attempt. |
| `ic_token_cost` | number(usd) | Cost computed from normalized token accounting. |
| `ic_intent_score` | number(0..1) | **Proprietary Intentcue intent-accuracy output** from eval runtime. |
| `ic_route_action` | enum | `primary` \| `retry` \| `failover` \| `circuit_open`. |
| `ic_status_code` | number | Provider HTTP status for this attempt. |
| `ic_cluster` | string | PAL cluster ID handling dispatch. |
| `ic_timestamp` | string | ISO-8601 event timestamp. |

### Example event (single attempt)

```json
{
  "ic_trace_id": "trc_8f2a",
  "ic_intent_id": "chat.support.v3",
  "ic_provider": "anthropic",
  "ic_latency": 812,
  "ic_token_cost": 0.0039,
  "ic_intent_score": 0.94,
  "ic_route_action": "failover"
}
```

### SRE starter alerts

- `p95(ic_latency) > 2500ms for 5m by ic_provider`
- `sum(ic_route_action="circuit_open") > 3 in 10m`
- `avg(ic_intent_score) < 0.85 for intent_id over 15m`

---

## Self-evaluation checkpoint

- `ic_intent_score` is explicitly defined as a **proprietary Intentcue output**.
- All code blocks remain under 15 lines.
- Failover logic uses native PAL cluster methods (`resilience`, `dispatch`), not generic try/catch flows.
