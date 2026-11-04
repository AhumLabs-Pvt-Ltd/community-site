// Top bar: the sound toggle (off by default). The kit's wireClickFeel() owns the toggle's
// label and state (data-sound-toggle), so React renders it once and leaves it alone.
export default function Header() {
  return (
    <div className="mx-auto flex max-w-5xl justify-end px-4 pt-4">
      <button type="button" className="hd-btn clicky hr2 text-lg" data-sound-toggle>
        Sound: off
      </button>
    </div>
  );
}
