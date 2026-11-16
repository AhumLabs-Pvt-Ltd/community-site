import Drawing from "../handdrawn/Drawing.jsx";
import { contributors, footer } from "../content.js";
import { sleepingOwl, wakingOwl } from "../scenes.js";

// Each name tag gets a slightly different wobbly border, like the cards elsewhere.
const SHAPES = ["hr1", "hr3", "hr2"];

// A long, loose pen line that sets the small print apart from the names above it, like a
// rule drawn across the bottom of a notebook page. Static: it sits right next to text.
function InkRule() {
  return (
    <svg
      viewBox="0 0 600 10"
      preserveAspectRatio="none"
      className="mt-6 block h-2.5 w-full"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="var(--ink)"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path
        d="M2 6 C 80 3, 150 8, 230 5 C 310 2, 380 8, 460 5 C 520 3, 565 7, 598 4"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

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
        <InkRule />
        <p className="mt-3 text-sm text-muted">
          {footer.credit}{" "}
          <a href={footer.creditLink.href} className="ink-link">
            {footer.creditLink.label}
          </a>
          . {footer.licence}
        </p>
      </div>
    </footer>
  );
}
