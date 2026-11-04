import Section from "./Section.jsx";
import { buildDays } from "../content.js";

export default function BuildDays() {
  return (
    <Section id="build-days" title={buildDays.title}>
      {buildDays.paragraphs.map((text) => (
        <p key={text} className="mt-4 first:mt-0">
          {text}
        </p>
      ))}
    </Section>
  );
}
