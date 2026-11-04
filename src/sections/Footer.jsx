import { contributors } from "../content.js";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-ink/70">
        <h2 className="font-semibold text-ink">Contributors</h2>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          {contributors.map((c) => (
            <li key={c.name}>{c.url ? <a href={c.url}>{c.name}</a> : c.name}</li>
          ))}
        </ul>
        <p className="mt-6">Ahum is run by Ahum Labs. Code licensed under Apache-2.0.</p>
      </div>
    </footer>
  );
}
