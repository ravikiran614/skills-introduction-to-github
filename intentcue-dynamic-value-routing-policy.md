# Intentcue Dynamic Value Routing Policy (Efficiency First)

Intentcue PAL clusters can eliminate monthly manual budget triage by embedding economics directly in routing. Instead of auditing spend after incidents, the cluster continuously optimizes on an **efficiency frontier** where quality and cost are jointly constrained. In practice, this architecture behaves as a built-in financial governor: high-confidence intents are served at low unit cost, while uncertain or deep intents are escalated to premium models to protect outcome quality.

```yaml
intentcue_policy:
  id: pal.dynamic-value-routing.v1
  objective:
    primary_metric: cpia
    formula: ic_token_cost / max(ic_intent_score, 0.01)
    optimize: minimize
  thresholds:
    confidence_min: 0.92
    complexity_depth_max: 7
  providers:
    economy: groq
    premium: [openai, anthropic]
  routing:
    - when: "ic_intent_score > confidence_min && intent.depth <= complexity_depth_max"
      strategy: lowest_cost
      candidates: [groq]
    - when: "ic_intent_score <= confidence_min || intent.depth > complexity_depth_max"
      strategy: best_cpia
      candidates: [openai, anthropic]
  enforcement:
    reevaluate_after_each_response: true
    fallback_on_provider_error: [openai, anthropic, groq]
    emit_metrics: [ic_token_cost, ic_intent_score, cpia]
```
