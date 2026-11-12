import Section from "./Section.jsx";
import { join } from "../content.js";

const SHAPES = ["hr1", "hr2", "hr3"];

// Loose pen loops, one per step, so the numbers look circled by hand in a notebook.
// Each starts and ends in a slightly different place and overshoots, like a real pen stroke.
const LOOPS = [
  "M33 7 C 20 3, 6 11, 6 27 C 6 43, 19 51, 31 50 C 45 49, 54 39, 53 25 C 52 12, 42 5, 28 8",
  "M14 12 C 22 4, 41 3, 50 14 C 58 25, 53 44, 38 50 C 24 55, 7 46, 6 30 C 5 19, 11 11, 21 7",
  "M47 13 C 39 4, 20 3, 11 13 C 3 23, 5 41, 18 49 C 30 56, 47 50, 52 37 C 56 26, 53 17, 43 10",
];

// Static on purpose: the cards already settle in on scroll, and that's enough motion here.
function StepNumber({ n }) {
  return (
    <span className="relative inline-grid h-14 w-14 place-items-center" aria-hidden="true">
      <svg
        viewBox="0 0 58 56"
        className="absolute inset-0 h-full w-full"
        focusable="false"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={LOOPS[(n - 1) % LOOPS.length]} />
      </svg>
      <span className="hd-display relative text-4xl leading-none text-accent">{n}</span>
    </span>
  );
}

// No sign-up forms here. Do not collect personal data until there is a privacy policy.
export default function Join() {
  return (
    <Section id="join" title={join.title}>
      <ol className="grid gap-5 md:grid-cols-3">
        {join.steps.map((step, i) => (
          <li key={step.title} className={`hd-card ${SHAPES[i]}`}>
            <StepNumber n={i + 1} />
            <h3 className="text-3xl">{step.title}</h3>
            {step.href ? (
              <a href={step.href} className="mt-1 block text-muted underline">
                {step.body}
              </a>
            ) : (
              <p className="mt-1 text-muted">{step.body}</p>
            )}
          </li>
        ))}
      </ol>
      <a
        href={join.cta.href}
        className="hd-btn primary clicky hr2 mt-8 inline-block text-2xl no-underline"
      >
        {join.cta.label}
      </a>
    </Section>
  );
}
