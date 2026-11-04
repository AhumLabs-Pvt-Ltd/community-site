// Hand-drawn scenes for each section. Characters stay the same everywhere:
// fox in a captain's cap = community lead, owl = knowledge review, beaver = schemas,
// otter = the sandbox fleet, raccoon = agent setup.
import { ahumTriangle, critter, props } from "./handdrawn/handdrawn.js";

const ground = (x1, x2, y) =>
  `<path class="ln nf" d="M${x1},${y} C${x1 + (x2 - x1) * 0.3},${y - 2} ${x1 + (x2 - x1) * 0.7},${y + 2} ${x2},${y}"/>`;

// A critter you can poke: lifts on hover, squeaks and boings on press (wired by the kit).
const poke = (x, y, s, inner, cls = "") =>
  `<g class="hd-hit"><g transform="translate(${x},${y}) scale(${s})"><g class="${cls}">${inner}</g></g></g>`;

// A small boat: wooden hull, mast and the Ahum triangle as a swaying sail.
function boat(cx, deck, w) {
  const top = deck - w * 1.1;
  return `<path class="ln nf" style="stroke-width:3" d="M${cx},${top} L${cx},${deck}"/>
    <g class="sway">${ahumTriangle(cx, top, deck - w * 0.15, w * 0.42)}</g>
    <path class="ln wood" d="M${cx - w},${deck} C${cx - w * 0.4},${deck + 4} ${cx + w * 0.4},${deck + 4} ${cx + w},${deck} C${cx + w * 0.85},${deck + w * 0.4} ${cx + w * 0.5},${deck + w * 0.5} ${cx},${deck + w * 0.5} C${cx - w * 0.5},${deck + w * 0.5} ${cx - w * 0.85},${deck + w * 0.4} ${cx - w},${deck} Z"/>`;
}

// Water: a soft fill with only the wavy surface inked, plus one short ripple.
function sea(w, y) {
  const q = (t) => (w * t).toFixed(0);
  const wave = `M0,${y} C${q(0.12)},${y - 8} ${q(0.25)},${y + 8} ${q(0.38)},${y} C${q(0.5)},${y - 8} ${q(0.63)},${y + 8} ${q(0.75)},${y} C${q(0.87)},${y - 8} ${q(0.95)},${y + 6} ${w},${y}`;
  return `<path class="skyf" d="${wave} L${w},${y + 50} L0,${y + 50} Z"/>
    <path class="ln nf" d="${wave}"/>
    <path class="ln thin nf" d="M${q(0.4)},${y + 22} q12,-6 24,0 q12,6 24,0"/>`;
}

// Hero: the fox captain codes on deck while the otter rides along. Only the fox works
// (bobwork) and only the sail sways, so the hero has one clear point of life.
export const heroScene = `
  ${boat(250, 196, 120)}
  ${poke(205, 152, 1, critter("fox", "work", props.cap() + props.laptop()), "bobwork")}
  ${poke(305, 160, 0.8, critter("otter", "work"))}
  ${sea(500, 214)}`;

// "What we're building": one critter per item, still apart from blinking.
export const buildingScenes = [
  `${poke(80, 52, 0.95, critter("owl", "work", props.clipboard()))}
   <g transform="translate(145,72) rotate(6)"><rect class="ln muz" x="-18" y="-24" width="36" height="46" rx="2"/><path class="ln thin nf" d="M-10,-12 h20 M-10,-4 h20 M-10,4 h14"/></g>
   ${ground(20, 180, 118)}`,
  `${poke(70, 52, 0.95, critter("beaver", "work", props.hardhat()))}
   <g transform="translate(140,72)"><rect class="ln muz" x="-30" y="-26" width="60" height="50" rx="3"/><path class="ln thin nf" d="M-30,-10 h60 M-30,6 h60 M-6,-26 v50"/></g>
   ${ground(20, 180, 118)}`,
  `${poke(64, 52, 0.95, critter("otter", "work"))}
   <g transform="translate(142,20) scale(.36)"><path class="ln nf" style="stroke-width:6" d="M0,0 L0,130"/>${ahumTriangle(0, 0, 112, 50)}<path class="ln wood" d="M-110,130 C-40,138 40,138 110,130 C96,170 60,180 0,180 C-60,180 -96,170 -110,130 Z"/></g>
   ${ground(20, 180, 118)}`,
  `${poke(80, 52, 0.95, critter("raccoon", "work", props.laptop()))}
   <g transform="translate(150,64)"><rect class="ln washf" x="-22" y="-18" width="44" height="34" rx="4"/><path class="ln thin nf" style="stroke:var(--ok)" d="M-13,-6 l6,5 l-6,5 M-2,6 h12"/></g>
   ${ground(20, 180, 118)}`,
];

// Build days: three critters at one table, laptops out.
export const buildDaysScene = `
  ${poke(70, 66, 0.9, critter("fox", "work", props.cap()))}
  ${poke(160, 66, 0.9, critter("beaver", "work", props.hardhat()))}
  ${poke(250, 66, 0.9, critter("parrot", "work"))}
  <path class="ln wood" d="M20,116 L300,116 L292,130 L28,130 Z"/>
  <rect class="ln washf" x="98" y="96" width="34" height="18" rx="3"/>
  <rect class="ln washf" x="188" y="96" width="34" height="18" rx="3"/>
  <path class="ln nf" d="M44,130 L40,160 M276,130 L280,160"/>`;

// Empty contributors list.
export const sleepingOwl = `${poke(60, 46, 1, critter("owl", "sleep", props.mug()))}${ground(10, 110, 112)}`;
