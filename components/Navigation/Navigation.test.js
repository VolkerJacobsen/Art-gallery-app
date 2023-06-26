import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

jest.mock("next/router", () => require("next-router-mock"));

test("display navigation link labeled 'Spotlight'", () => {
  render(<Navigation />);
  const spotlightLink = screen.getByRole("link", {
    name: /spotlight/i,
  });
  expect(spotlightLink).toBeInTheDocument();
});

test("display navigation link labeled 'Pieces'", () => {
  render(<Navigation />);
  const spotlightLink = screen.getByRole("link", {
    name: /art pieces/i,
  });
  expect(spotlightLink).toBeInTheDocument();
});
