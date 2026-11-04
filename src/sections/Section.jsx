import { motion } from "framer-motion";

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
      <div className="mt-6 leading-relaxed">{children}</div>
    </motion.section>
  );
}
