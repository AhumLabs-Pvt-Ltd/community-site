import { motion } from "framer-motion";
import { ORG_URL } from "../content.js";

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
          Ahum
        </motion.h1>
        <p className="mt-4 max-w-2xl text-xl text-foam/80">
          Placeholder: an open developer community for maritime software.
        </p>
        <a
          href={ORG_URL}
          className="mt-8 inline-block rounded bg-signal px-5 py-3 font-medium text-white"
        >
          See the code on GitHub
        </a>
      </div>
    </header>
  );
}
