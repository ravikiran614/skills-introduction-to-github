export default function FounderPage() {
  return (
    <div className="container-x py-16">
      <h1 className="text-3xl font-bold">Founder Perspective</h1>
      <p className="mt-4 max-w-3xl text-slate-300">Ravi Kiran Dasari frames prompt management as a software architecture problem. Intentcue exists to make intent behavior explicit, testable, and governable at production scale.</p>
      <ul className="mt-8 list-disc space-y-2 pl-5 text-slate-300">
        <li>Prompts are operational state, not static copy.</li>
        <li>Model swaps should be controlled runtime changes, not app rewrites.</li>
        <li>Observability and evals belong in the default developer loop.</li>
      </ul>
    </div>
  );
}
