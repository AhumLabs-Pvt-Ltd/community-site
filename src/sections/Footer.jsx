import { contributors, footer } from "../content.js";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-ink/70">
        <h2 className="font-semibold text-ink">{footer.contributorsTitle}</h2>
        {contributors.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            {contributors.map((c) => (
              <li key={c.name}>{c.url ? <a href={c.url}>{c.name}</a> : c.name}</li>
            ))}
          </ul>
        )}
        <p className="mt-6">
          {footer.credit}{" "}
          <a href={footer.creditLink.href} className="underline">
            {footer.creditLink.label}
          </a>
          . {footer.licence}
        </p>
      </div>
    </footer>
  );
}
