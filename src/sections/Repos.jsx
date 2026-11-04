import Section from "./Section.jsx";
import { ORG_URL, repos } from "../content.js";

export default function Repos() {
  return (
    <Section id="repos" title="Repositories">
      <ul className="grid gap-4 sm:grid-cols-2">
        {repos.map((repo) => (
          <li key={repo.name} className="rounded border border-ink/10 bg-white p-5">
            <a href={`${ORG_URL}/${repo.name}`} className="font-semibold text-sea underline">
              {repo.name}
            </a>
            <p className="mt-2 text-base">{repo.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
