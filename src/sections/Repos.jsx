import Section from "./Section.jsx";
import { ORG_URL, repos } from "../content.js";

const SHAPES = ["hr2", "hr1", "hr3", "hr2"];

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
              <span className="hd-display block text-3xl">{repo.name}</span>
              <span className="mt-1 block text-muted">{repo.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
