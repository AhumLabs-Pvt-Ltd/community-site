// Renders a hand-drawn scene. `scene` is an SVG string built from the kit (critter(), props,
// ahumTriangle()) in src/scenes.js, never from user input. The "sk" group gets the boil wobble.
export default function Drawing({ viewBox, scene, className = "", label }) {
  return (
    <div className={`drawing ${className}`}>
      <svg viewBox={viewBox} role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
        <g className="sk" dangerouslySetInnerHTML={{ __html: scene }} />
      </svg>
    </div>
  );
}
