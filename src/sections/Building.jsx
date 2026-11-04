import Section from "./Section.jsx";
import { building } from "../content.js";

export default function Building() {
  return (
    <Section id="building" title={building.title}>
      <p>{building.intro}</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {building.items.map((item) => (
          <li key={item.title} className="rounded border border-ink/10 bg-white p-5 text-base">
            <strong className="font-semibold text-ink">{item.title}</strong> {item.body}
          </li>
        ))}
      </ul>
      <p className="mt-8">{building.outro}</p>
    </Section>
  );
}
