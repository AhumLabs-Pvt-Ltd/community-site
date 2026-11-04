import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import App from "../src/App.jsx";

it("renders every placeholder section", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1, name: "Ahum" })).toBeInTheDocument();
  for (const name of [
    "What we're building",
    "Repositories",
    "Build days",
    "Join the community",
    "Contributors",
  ]) {
    expect(screen.getByRole("heading", { name })).toBeInTheDocument();
  }
});

it("has no forms that could collect personal data", () => {
  const { container } = render(<App />);
  expect(container.querySelector("form, input, textarea, select")).toBeNull();
});
