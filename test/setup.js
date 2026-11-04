import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Unmount rendered components between tests (Vitest globals are off, so do it here).
afterEach(cleanup);

// jsdom has no IntersectionObserver; framer-motion's whileInView needs one.
globalThis.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
