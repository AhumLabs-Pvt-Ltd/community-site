import Drawing from "../handdrawn/Drawing.jsx";
import Section from "./Section.jsx";
import { building } from "../content.js";
import { buildingScenes } from "../scenes.js";

const SHAPES = ["hr1", "hr3", "hr2", "hr1"];

const SCENE_LABELS = [
  "An owl reviews a knowledge card with a clipboard.",
  "A beaver in a hard hat arranges data schema cards.",
  "An otter rides a small boat with an Ahum sail in the sandbox fleet.",
  "A raccoon sets up a laptop for agent tools.",
];

export default function Building() {
  return (
    <Section id="building" title={building.title}>
      <p className="max-w-3xl">{building.intro}</p>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {building.items.map((item, i) => (
          <li key={item.title} className={`hd-card ${SHAPES[i]}`}>
            <Drawing
              viewBox="0 0 200 124"
              scene={buildingScenes[i]}
              label={SCENE_LABELS[i]}
              className="mx-auto max-w-56"
            />
            <h3 className="mt-2 text-3xl">{item.title}</h3>
            <p className="mt-1 text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-3xl">{building.outro}</p>
    </Section>
  );
}
