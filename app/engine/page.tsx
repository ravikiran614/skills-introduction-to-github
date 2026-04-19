const blocks = ["Intent Router", "Context Composer", "Policy Guardrails", "Model Adapter", "Eval Gate", "Telemetry & Drift Alerts"];

export default function EnginePage() {
  return (
    <div className="container-x py-16">
      <h1 className="text-3xl font-bold">Universal Prompt Engine</h1>
      <p className="mt-3 max-w-3xl text-slate-300">See every transformation between user intent and output. PAL compiles intent contracts into provider-native calls while preserving one trace contract.</p>
      <div className="mt-8 grid gap-3 md:grid-cols-3">
        {blocks.map((b) => (
          <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4" key={b}>{b}</div>
        ))}
      </div>
    </div>
  );
}
