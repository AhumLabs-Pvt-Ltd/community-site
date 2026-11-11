import Section from "./Section.jsx";
import { ORG_URL, repos } from "../content.js";

const SHAPES = ["hr2", "hr1", "hr3", "hr2"];

// A small hand-drawn arrow in the corner of each tile, so it reads as a link out to GitHub.
// Static on purpose: the tiles already tilt on hover, and that's enough motion here.
function OutArrow() {
  return (
    <svg
      viewBox="0 0 28 28"
      className="mt-1 h-6 w-6 shrink-0"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="var(--ink)"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22 C 10 17, 15 12, 21.5 6.5" />
      <path d="M12.5 6 C 15.5 6.3, 18.5 6.2, 22 6 C 21.7 9.5, 21.8 12.5, 22.2 15.5" />
    </svg>
  );
}

export default function Repos() {
  return (
    <Section id="repos" title={repos.title}>
      <ul className="grid gap-5 sm:grid-cols-2">
        {repos.items.map((repo, i) => (
          <li key={repo.name} className="flex">
            <a
              href={`${ORG_URL}/${repo.name}`}
              className={`hd-tile clicky ${SHAPES[i]} block w-full no-underline`}
            >
              <span className="flex items-start justify-between gap-3">
                <span className="hd-display block min-w-0 text-3xl break-words">{repo.name}</span>
                <OutArrow />
              </span>
              <span className="mt-1 block text-muted">{repo.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
