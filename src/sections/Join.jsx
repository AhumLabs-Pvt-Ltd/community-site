import Section from "./Section.jsx";
import { join } from "../content.js";

// No sign-up forms here. Do not collect personal data until there is a privacy policy.
export default function Join() {
  return (
    <Section id="join" title={join.title}>
      <ol className="list-decimal space-y-3 pl-6">
        {join.steps.map((step) => (
          <li key={step.title}>
            <strong className="font-semibold text-ink">{step.title}</strong> {step.body}
          </li>
        ))}
      </ol>
      <a href={join.cta.href} className="mt-6 inline-block font-medium text-sea underline">
        {join.cta.label}
      </a>
    </Section>
  );
}
