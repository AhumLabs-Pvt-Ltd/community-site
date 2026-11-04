import Drawing from "../handdrawn/Drawing.jsx";
import { contributors, footer } from "../content.js";
import { sleepingOwl } from "../scenes.js";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-4 pt-8 pb-16">
      <div className="hd-card hr2">
        <h2 className="text-4xl">{footer.contributorsTitle}</h2>
        {contributors.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
            {contributors.map((c) => (
              <li key={c.name}>{c.url ? <a href={c.url}>{c.name}</a> : c.name}</li>
            ))}
          </ul>
        ) : (
          <div className="mt-2 flex items-center gap-4">
            <Drawing viewBox="0 0 120 120" scene={sleepingOwl} className="w-24 shrink-0" />
            <p className="text-muted">No names here yet. Yours could be the first.</p>
          </div>
        )}
        <p className="mt-6 text-sm text-muted">
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
