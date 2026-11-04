import { MotionConfig } from "framer-motion";
import { useHanddrawn } from "./handdrawn/useHanddrawn.js";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Building from "./sections/Building.jsx";
import Repos from "./sections/Repos.jsx";
import BuildDays from "./sections/BuildDays.jsx";
import Join from "./sections/Join.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  useHanddrawn();
  return (
    // reducedMotion="user": Framer Motion skips movement when the OS asks for reduced motion.
    <MotionConfig reducedMotion="user">
      <Header />
      <Hero />
      <main>
        <Building />
        <Repos />
        <BuildDays />
        <Join />
      </main>
      <Footer />
    </MotionConfig>
  );
}
