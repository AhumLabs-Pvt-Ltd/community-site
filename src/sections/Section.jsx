import { motion } from "framer-motion";

/** Shared wrapper: fades each section in once as it scrolls into view. */
export default function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto max-w-5xl px-4 py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="mt-6 text-lg leading-relaxed text-ink/80">{children}</div>
    </motion.section>
  );
}
