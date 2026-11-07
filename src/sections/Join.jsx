import Section from "./Section.jsx";
import { join } from "../content.js";

const SHAPES = ["hr1", "hr2", "hr3"];

// No sign-up forms here. Do not collect personal data until there is a privacy policy.
export default function Join() {
  return (
    <Section id="join" title={join.title}>
      <ol className="grid gap-5 md:grid-cols-3">
        {join.steps.map((step, i) => (
          <li key={step.title} className={`hd-card ${SHAPES[i]}`}>
            <span className="hd-display block text-5xl text-accent" aria-hidden="true">
              {i + 1}
            </span>
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
