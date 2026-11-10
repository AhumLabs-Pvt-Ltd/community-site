import Drawing from "../handdrawn/Drawing.jsx";
import { contributors, footer } from "../content.js";
import { sleepingOwl, wakingOwl } from "../scenes.js";

// Each name tag gets a slightly different wobbly border, like the cards elsewhere.
const SHAPES = ["hr1", "hr3", "hr2"];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-4 pt-8 pb-16">
      <div className="hd-card hr2">
        <h2 className="text-4xl">{footer.contributorsTitle}</h2>
        {contributors.length > 0 ? (
          <div className="mt-3 flex items-center gap-4">
            <Drawing
              viewBox="0 0 120 120"
              scene={wakingOwl}
              className="hidden w-20 shrink-0 sm:block"
            />
            <ul className="flex min-w-0 flex-wrap gap-3">
              {contributors.map((c, i) => (
                <li
                  key={c.name}
                  className={`max-w-full border-2 border-ink bg-paper px-3 py-1 break-words ${SHAPES[i % SHAPES.length]}`}
                >
                  {c.url ? <a href={c.url}>{c.name}</a> : c.name}
                </li>
              ))}
            </ul>
          </div>
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
