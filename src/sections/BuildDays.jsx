import Drawing from "../handdrawn/Drawing.jsx";
import Section from "./Section.jsx";
import { buildDays } from "../content.js";
import { buildDaysScene } from "../scenes.js";

export default function BuildDays() {
  return (
    <Section id="build-days" title={buildDays.title}>
      <div className="grid items-center gap-8 md:grid-cols-[3fr_2fr]">
        <div>
          {buildDays.paragraphs.map((text) => (
            <p key={text} className="mt-4 first:mt-0">
              {text}
            </p>
          ))}
        </div>
        <Drawing
          viewBox="0 0 320 164"
          scene={buildDaysScene}
          label="Three critters working together at a table with laptops, planning a build day."
          className="hd-card hr3"
        />
      </div>
    </Section>
  );
}
