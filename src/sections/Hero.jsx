import { motion } from "framer-motion";
import { hero } from "../content.js";

export default function Hero() {
  return (
    <header className="bg-sea text-foam">
      <div className="mx-auto max-w-5xl px-4 py-28">
        <motion.h1
          className="text-5xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {hero.title}
        </motion.h1>
        <p className="mt-4 max-w-2xl text-xl font-medium">{hero.tagline}</p>
        <p className="mt-4 max-w-2xl text-lg text-foam/80">{hero.body}</p>
        <a
          href={hero.cta.href}
          className="mt-8 inline-block rounded bg-signal px-5 py-3 font-medium text-white"
        >
          {hero.cta.label}
        </a>
      </div>
    </header>
  );
}
