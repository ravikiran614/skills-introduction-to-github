import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intentcue | Intent Orchestration",
  description: "Intent orchestration for production LLM apps."
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/engine", label: "Engine" },
  { href: "/sdk", label: "SDK" },
  { href: "/founder", label: "Founder" }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-800/70 bg-slate-950/90 backdrop-blur">
          <nav className="container-x flex items-center justify-between py-4">
            <Link className="font-semibold tracking-wide text-cyan-300" href="/">
              Intentcue
            </Link>
            <ul className="flex gap-5 text-sm text-slate-300">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link className="hover:text-cyan-300" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
