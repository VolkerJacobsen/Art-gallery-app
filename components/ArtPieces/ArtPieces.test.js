import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";
import { pieces } from "../../utils/data/TestData/";

test("display all ArtPieces as a list", () => {
  render(<ArtPieces pieces={pieces} />);
  const artPieces = screen.getAllByRole("listitem");
  expect(artPieces).toHaveLength(pieces.length);
});

test("displays each artPieces image", () => {
  render(<ArtPieces pieces={pieces} />);
  const artPieceImages = screen.getAllByRole("img");
  expect(artPieceImages).toHaveLength(pieces.length);
});
