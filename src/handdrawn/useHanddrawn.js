import { useEffect } from "react";
import { startBoil, wireClickFeel } from "./handdrawn.js";

let started = false;

// Starts the line boil and the click/sound feel once per page. Guarded because React
// StrictMode runs effects twice in development, and the kit adds global listeners.
export function useHanddrawn() {
  useEffect(() => {
    if (started) return;
    started = true;
    startBoil();
    wireClickFeel();
  }, []);
}
