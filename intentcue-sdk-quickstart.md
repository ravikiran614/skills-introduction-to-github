# Intentcue SDK Quickstart (Day Zero)

> **Goal:** Get deterministic multi-LLM dispatch running in minutes, not days.

## Why Intentcue (Relief Framing)

**Problem:** Provider APIs diverge on payload shape, tool-call semantics, retries, and versioning behavior.

**Intentcue fix:** A single **Prompt Abstraction Layer (PAL)** and **universal versioning** model that remove provider-specific integration stress (“API Hell”).

---

## 1) Prompt Abstraction Layer (PAL)

**PAL** is a semantic bridge that decouples **intent definition** from **provider schema**.

- **Input contract:** normalized `intent`, `context`, `constraints`, `evalProfile`.
- **Compilation step:** PAL compiles the normalized contract into provider-native request envelopes.
- **Execution layer:** one dispatch call fans out to multiple providers with consistent trace metadata.
- **Output contract:** normalized `output`, `usage`, `latencyMs`, `safety`, and `traceId`.

### PAL guarantees

1. **Schema isolation:** switching providers does not require prompt rewrite.
2. **Policy continuity:** guardrails apply before provider adapters.
3. **Observability parity:** traces remain structurally identical across providers.

---

## 2) Hello World Dispatch (TypeScript)

```ts
import { Intentcue } from "@intentcue/sdk";

const cue = new Intentcue({ apiKey: process.env.INTENTCUE_API_KEY! });
const run = await cue.intent.dispatch(["openai", "anthropic", "groq"], {
  prompt: "Summarize CAP theorem in 3 bullets.",
  intent: "docs.summary.v1",
  temperature: 0.2
});
console.log(run.results.map(r => [r.provider, r.output]));
```

**Notes**

- **Line constraint:** snippet body is under 10 lines excluding imports.
- **Dispatch model:** one call, three providers, normalized response set.

---

## 3) Universal Versioning (Deterministic Model Swaps)

Universal versioning stores **prompt state** independently from provider model version strings.

### Versioned state tuple

`(intent_id, prompt_revision, context_schema_rev, policy_rev, eval_profile_rev)`

### Resolution sequence

1. Client sends `intent_id` (+ optional revision pin).
2. Runtime resolves immutable prompt state tuple.
3. PAL compiles tuple into provider-specific payloads.
4. Adapter injects target model (e.g., `gpt-*`, `claude-*`, `llama-*`).
5. Trace stores both **state hash** and **provider model id**.

### Determinism behavior

- **Model swap:** provider model can change while prompt state hash remains fixed.
- **Replayability:** same state hash can be replayed across providers for drift analysis.
- **Rollback safety:** revert by pinning prior `prompt_revision`; no code redeploy needed.

---

## 4) Day-Zero Integration Checklist

- [ ] Create API key and set `INTENTCUE_API_KEY`.
- [ ] Register `intent_id` (e.g., `docs.summary.v1`).
- [ ] Dispatch to `openai`, `anthropic`, `groq` in one call.
- [ ] Inspect normalized traces and compare provider deltas.
- [ ] Pin revision in production after eval pass.

---

## 5) Cognitive-Load-Optimized Mental Model

- **Write once:** define intent semantics once.
- **Dispatch many:** fan out to multiple providers through PAL.
- **Version once:** persist prompt state independently of model IDs.
- **Operate calmly:** debug using one trace shape, not three API dialects.
