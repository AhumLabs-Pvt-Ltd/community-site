import Section from "./Section.jsx";
import { ORG_URL } from "../content.js";

// No sign-up forms here. Do not collect personal data until there is a privacy policy.
export default function Join() {
  return (
    <Section id="join" title="Join the community">
      <p>Placeholder: how to get involved. For now, start on GitHub.</p>
      <a href={ORG_URL} className="mt-4 inline-block font-medium text-sea underline">
        Find a good first issue
      </a>
    </Section>
  );
}
