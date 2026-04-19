export default function SdkPage() {
  return (
    <div className="container-x py-16">
      <h1 className="text-3xl font-bold">SDK Quickstart</h1>
      <p className="mt-3 text-slate-300">Documentation-first onboarding: install, dispatch, inspect traces, pin intent revisions.</p>
      <pre className="mt-8 overflow-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-xs text-cyan-200">
{`import { Intentcue } from "@intentcue/sdk";
const cue = new Intentcue({ apiKey: process.env.INTENTCUE_API_KEY! });
const run = await cue.intent.dispatch(["openai", "anthropic", "groq"], {
  prompt: "Summarize CAP theorem in 3 bullets.",
  intent: "docs.summary.v1",
  temperature: 0.2
});`}
      </pre>
    </div>
  );
}
