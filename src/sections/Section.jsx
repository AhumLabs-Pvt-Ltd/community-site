import { motion } from "framer-motion";

// Short pen strokes drawn under each section title, like a heading underlined by hand in a
// notebook. Each section picks its own stroke so neighbouring headings don't match.
const WAVES = {
  building: "M3 9 C 20 3, 34 13, 52 8 C 70 3, 86 12, 104 7 C 118 4, 128 9, 137 6",
  repos: "M4 7 C 22 12, 38 3, 57 8 C 76 13, 92 4, 110 9 C 122 12, 131 7, 138 9",
  "build-days": "M2 8 C 18 4, 36 11, 55 7 C 74 3, 90 11, 108 8 C 121 6, 130 10, 136 7",
  join: "M5 9 C 24 4, 40 12, 60 7 C 78 3, 94 10, 112 6 C 124 4, 132 8, 138 6",
};
const DEFAULT_WAVE = WAVES.building;

// Static on purpose: sections already settle in once on scroll, and the line sits next to text.
function HeadingWave({ id }) {
  return (
    <svg
      viewBox="0 0 140 14"
      className="mt-1 block h-3.5 w-36"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="var(--ink)"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={WAVES[id] ?? DEFAULT_WAVE} />
    </svg>
  );
}

/** Shared wrapper: each section settles in once as it scrolls into view. */
export default function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto max-w-5xl px-4 py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
    >
      <h2 id={`${id}-title`} className="text-5xl">
        {title}
      </h2>
      <HeadingWave id={id} />
      <div className="mt-6 leading-relaxed">{children}</div>
    </motion.section>
  );
}
