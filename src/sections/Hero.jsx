import Drawing from "../handdrawn/Drawing.jsx";
import { hero } from "../content.js";
import { heroScene } from "../scenes.js";

export default function Hero() {
  return (
    <header className="mx-auto grid max-w-5xl items-center gap-8 px-4 pt-8 pb-12 md:grid-cols-2">
      <div>
        <h1 className="wordmark text-8xl">{hero.title}</h1>
        <p className="mt-4 text-xl font-semibold">{hero.tagline}</p>
        <p className="mt-4 text-muted">{hero.body}</p>
        <a
          href={hero.cta.href}
          className="hd-btn primary clicky hr1 mt-8 inline-block text-2xl no-underline"
        >
          {hero.cta.label}
        </a>
      </div>
      <Drawing
        viewBox="110 40 280 210"
        scene={heroScene}
        label="A fox in a captain's cap codes on a small boat with an Ahum sail, an otter beside it."
      />
    </header>
  );
}
