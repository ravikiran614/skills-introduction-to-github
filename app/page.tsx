import Link from "next/link";

const painPoints = [
  "Prompt drift after model updates",
  "Fragmented provider payloads and debug workflows",
  "Unpredictable rollout behavior in production"
];

export default function HomePage() {
  return (
    <div className="container-x py-16">
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Intent Orchestration, 2026</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Ship AI features that stay stable after model changes.</h1>
          <p className="mt-4 max-w-xl text-slate-300">Intentcue turns fragile prompt strings into versioned, testable intent flows with observability, eval gates, and PAL routing.</p>
          <div className="mt-8 flex gap-3">
            <Link className="rounded-lg bg-cyan-400 px-4 py-2 font-medium text-slate-950" href="/sdk">Start in SDK</Link>
            <Link className="rounded-lg border border-slate-700 px-4 py-2 text-slate-200" href="/engine">Explore Engine</Link>
          </div>
        </div>
        <pre className="overflow-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-xs text-cyan-200">
{`const result = await cue.intent.dispatch(["openai","anthropic","groq"], {
  intent: "support.refund.v2",
  input: { message: "I was charged twice" },
  eval: { profile: "strict" }
});`}
        </pre>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Why developers switch</h2>
        <ul className="mt-5 grid gap-3 md:grid-cols-3">
          {painPoints.map((item) => (
            <li className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-slate-300" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
