# Intentcue 2026 Digital Presence Roadmap

## 0) Positioning North Star

**Intentcue** is the **Intent Orchestration Layer** between foundation models and production software.

- **Category claim:** “From prompt engineering to intent orchestration.”
- **Audience:** early-adopter developers, DX leads, AI product engineers, founder-led startup teams.
- **Core pain:** prompt drift, untraceable behavior changes, and brittle LLM features that burn engineering time.
- **Core promise:** deterministic orchestration patterns, eval-first shipping, and SDK-native integration paths.

---

## 1) Brand Identity (Tech-Forward + Innovative)

### Brand archetype: **Sage for Builders**

Intentcue should feel like a calm, trusted systems architect in a noisy AI ecosystem.

### Identity pillars

1. **Clarity over hype**
   - Explain what happens between user intent, policy, context, model, and output.
2. **Control over chaos**
   - Versioned intent flows, rollout safety, observability, and testability.
3. **Velocity with guardrails**
   - Faster iteration through tooling that catches drift before prod incidents.
4. **Human-centered DX**
   - Acknowledge cognitive load and developer burnout from prompt firefighting.

### Empathy framing (burnout-aware messaging)

Use copy patterns that reflect developer lived experience:

- “You’re not bad at prompts. Your system lacks orchestration boundaries.”
- “Stop babysitting fragile prompts at 2 AM.”
- “Ship AI features that stay stable after model updates.”

### Voice & tone system

- **Primary tone:** technical, direct, respectful of reader intelligence.
- **Secondary tone:** wise and composed (Sage persona), never mystical.
- **Avoid:** generic SaaS language (“unlock value,” “seamless synergy”).

### Tagline candidates

- “Intentcue: Orchestrate intent. Ship reliable AI.”
- “From prompt strings to production intent systems.”
- “The control plane for LLM intent in real software.”

---

## 2) Sitemap (Conversion-Oriented)

1. **/** (Landing)
2. **/engine** (Universal Prompt Engine deep-dive)
3. **/sdk** (Docs-first SDK portal)
4. **/playground** (Live playground + examples)
5. **/founder** (Ravi Kiran Dasari’s perspective)
6. **/pricing** (Simple early-adopter tiers)
7. **/changelog** (Trust + velocity signal)
8. **/docs** (Versioned docs hub)
9. **/blog** (Technical essays, migration guides, architecture notes)
10. **/contact** (Waitlist / enterprise channel)

---

## 3) Landing Page Architecture (High-Conversion)

## Section A: Hero

**Goal:** establish category leadership in <8 seconds.

- **Headline:** “Intent Orchestration for Production LLM Apps.”
- **Subhead:** “Intentcue transforms prompt logic into versioned, testable intent flows your team can deploy safely.”
- **Primary CTA:** “Start in Playground”
- **Secondary CTA:** “Read SDK Docs”
- **Trust strip:** “Model-agnostic • Eval-ready • Runtime-safe • API-first”

**Conversion mechanics**

- Place code preview and runtime graph above the fold.
- CTA order follows PLG behavior: try first, docs second.
- Include “No credit card” for early dev adoption.

## Section B: Problem-to-Outcome Narrative

**Developer pain cards**

- Prompt drift after model updates.
- Copy-pasted prompt variants across services.
- No clear root-cause trace when behavior regresses.

**Intentcue outcomes**

- Intent contracts and reusable orchestration blocks.
- Controlled rollouts and diff-aware versioning.
- Built-in observability and evaluation hooks.

## Section C: Universal Prompt Engine (UI + system mental model)

Show the orchestration graph:

- Intent Router
- Context Composer
- Policy Guardrails
- Model Adapter
- Eval Gate
- Telemetry & Drift Alerts

**Microcopy:** “See every transformation between intent and output.”

## Section D: SDK-First Build Path

- 90-second quickstart code block.
- Tabs: TypeScript / Python / REST.
- “Copy and run” snippets with deterministic sample outputs.
- Link to versioned API references.

## Section E: Founder POV

- Short narrative from Ravi Kiran Dasari on why prompt management fails at scale.
- Emphasis on systems thinking, not one-off hacks.

## Section F: Social Proof / Validation

- Early design partner logos.
- “Before vs after” engineering metrics (time-to-fix drift, rollout confidence).
- Changelog heartbeat (“Shipped this week”).

## Section G: Final CTA

- “Build your first orchestrated intent flow in 5 minutes.”
- Actions: Playground / Docs / Book architecture call.

---

## 4) Detailed Content Guide by Required Sections

## 4.1 Hero (copy blueprint)

**Headline options**

1. “Orchestrate Intent, Not Prompt Strings.”
2. “The Production Layer Between LLMs and Software.”
3. “Ship AI Features That Don’t Drift in the Dark.”

**Body copy template**

“Intentcue gives developers a universal intent runtime: route, compose, constrain, evaluate, and observe LLM interactions with versioned control.”

**CTA architecture**

- Primary: Playground trial.
- Secondary: SDK docs.
- Tertiary (low emphasis): Founder manifesto.

## 4.2 Universal Prompt Engine (documentation-style product page)

### Recommended page structure

1. **What it is** (single paragraph)
2. **How it works** (pipeline diagram + short explanation)
3. **Core abstractions**
   - Intent
   - Context Pack
   - Policy Set
   - Route Strategy
   - Eval Spec
4. **Runtime lifecycle**
   - Author → Test → Version → Deploy → Observe → Iterate
5. **Production controls**
   - Canary rollouts, fallback chains, policy assertions
6. **API references** (deep links)
7. **Cookbook examples**

### Technical copy themes

- “Model upgrades should be a config change, not a rewrite.”
- “Every intent execution has trace IDs, snapshots, and eval verdicts.”

## 4.3 SDK (documentation-first)

### Docs IA (information architecture)

1. **Quickstart**
2. **Install**
3. **Core concepts**
4. **Hello Intentcue**
5. **Guides**
   - Routing
   - Guardrails
   - Evaluation
   - Streaming
6. **API Reference**
7. **Examples repo links**
8. **Migration notes**
9. **Troubleshooting**
10. **CLI reference**

### Example first-screen SDK content

```ts
import { Intentcue } from "@intentcue/sdk";

const cue = new Intentcue({ apiKey: process.env.INTENTCUE_API_KEY });

const result = await cue.intent.run({
  id: "support.refund.v2",
  input: { message: "I was charged twice" },
  context: { plan: "pro", locale: "en-US" },
  eval: { profile: "strict" }
});

console.log(result.output);
console.log(result.trace.id, result.eval.verdict);
```

### DX details that drive conversion

- One command install + one endpoint test.
- Language parity between TypeScript and Python.
- Version switcher pinned in left nav.
- Inline “why this matters” callouts to reduce cognitive load.

## 4.4 Founder Section (Ravi Kiran Dasari)

### Positioning angle

Ravi’s unique perspective should frame prompt management as a **software architecture concern** rather than copywriting.

### Suggested founder narrative

- “Prompting became a hidden operations tax.”
- “Intentcue was built to make behavior explicit, testable, and governable.”
- “The mission: remove uncertainty from LLM product development.”

### Founder content modules

1. **Manifesto excerpt** (short and technical)
2. **Architecture principles** (3-5 bullets)
3. **Video clip / annotated whiteboard**
4. **Links to technical essays**

---

## 5) Tree of Thoughts: Lead With Engine UI or SDK Code?

### Option A — Lead with Engine UI

- **Pros:** visual clarity; easier category explanation.
- **Cons:** can feel abstract to builders seeking immediate code proof.

### Option B — Lead with SDK Code

- **Pros:** instant credibility with developer audience; faster activation.
- **Cons:** category story may be unclear without orchestration mental model.

### Option C — Hybrid (Recommended)

- Hero starts with category headline + tiny code snippet + graph preview.
- First CTA = Playground (hands-on), second CTA = Docs (reference).
- Follow with Engine visualization once interest is earned.

**Decision (based on 2026 PLG behavior):** Use **Hybrid**, but anchor conversion around code-first activation paths.

---

## 6) Friction Audit + Self-Evaluation

### Likely friction points for new users

1. **Conceptual overhead:** “Intent orchestration” sounds abstract.
2. **Trust gap:** concern about runtime latency and lock-in.
3. **Setup anxiety:** fear of long integration cycles.
4. **Observability uncertainty:** unclear debug workflow.

### Mitigation plan

- Add a **Live Playground** with shareable traces and side-by-side model comparisons.
- Publish latency benchmarks and architecture constraints transparently.
- Provide 5-minute “Hello Intentcue” starter templates.
- Include “From raw prompt to orchestrated intent” migration wizard.

### Live Playground requirements

- Preloaded flows (support, summarization, extraction).
- Intent graph visualization + raw logs toggle.
- Drift simulation mode (change model version and inspect impact).
- “Export to SDK snippet” button.

---

## 7) Recommended Tech Stack (Next.js + Tailwind)

### Frontend

- **Framework:** Next.js (App Router)
- **UI:** Tailwind CSS + shadcn/ui style primitives
- **Content:** MDX for docs and changelog
- **Search:** local indexed docs search (or Algolia DocSearch)

### Backend / platform

- Edge-ready API routes for playground proxy
- Postgres + Redis for sessions/traces metadata
- Object store for execution snapshots

### Developer content ops

- Docs sourced from versioned markdown in repo
- Auto-generate API references from OpenAPI/typed SDK docs
- CI link checker + docs lint + snippet tests

### Instrumentation

- Web analytics for funnel steps (hero -> playground -> key generation -> first API call)
- Event taxonomy for activation milestones

---

## 8) 90-Day Launch Roadmap

### Phase 1 (Weeks 1-3): Foundations

- Finalize messaging framework and visual identity.
- Build landing page skeleton and docs IA.
- Ship SDK quickstart and copy-paste snippets.

### Phase 2 (Weeks 4-7): Activation Engine

- Launch Live Playground MVP.
- Publish 3 canonical examples and one migration guide.
- Add changelog and weekly shipping cadence.

### Phase 3 (Weeks 8-10): Trust + Scale

- Add drift case study and early partner quotes.
- Introduce benchmark/latency disclosure page.
- Expand docs with troubleshooting and eval guides.

### Phase 4 (Weeks 11-13): Conversion Optimization

- A/B test hero headline + CTA ordering.
- Optimize onboarding from playground to API key generation.
- Add “book architecture call” path for larger teams.

---

## 9) Success Metrics (North-Star + Leading Indicators)

- **Activation:** % visitors who run first playground flow.
- **Developer conversion:** % that generate API key after docs visit.
- **Time-to-first-success:** median minutes from landing to first successful intent execution.
- **Retention signal:** weekly returning builders using traces/evals.
- **Narrative resonance:** founder page to docs click-through rate.

---

## 10) Final Synthesis for Ravi Kiran Dasari

To launch Intentcue effectively in 2026, position it as the **production intent control plane** for serious builders. Lead with empathy for teams exhausted by prompt drift, then prove credibility through a code-first path and transparent runtime mechanics. Pair a documentation-first SDK with a live playground that turns abstract orchestration into an immediately testable experience. Frame Ravi’s voice as the architectural compass: from fragile prompt hacks to governed intent systems that can scale with confidence.
