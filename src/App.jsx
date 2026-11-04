import Hero from "./sections/Hero.jsx";
import Building from "./sections/Building.jsx";
import Repos from "./sections/Repos.jsx";
import BuildDays from "./sections/BuildDays.jsx";
import Join from "./sections/Join.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Building />
        <Repos />
        <BuildDays />
        <Join />
      </main>
      <Footer />
    </>
  );
}
