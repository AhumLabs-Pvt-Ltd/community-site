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

it("shows the build day and join copy", () => {
  render(<App />);
  expect(screen.getByText(/No maritime background needed/)).toBeInTheDocument();
  expect(screen.getAllByRole("listitem").length).toBeGreaterThanOrEqual(11);
  expect(screen.getByRole("link", { name: "Find a good first issue" })).toBeInTheDocument();
});

it("starts with sound off and credits contributors", () => {
  render(<App />);
  expect(screen.getByRole("button", { name: "Sound: off" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "mafujahmedridoy22-commits" })).toHaveAttribute(
    "href",
    "https://github.com/mafujahmedridoy22-commits",
  );
  expect(screen.getByRole("img", { name: /fox in a captain's cap/ })).toBeInTheDocument();
});
