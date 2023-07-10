import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";
import { pieces, artPiecesInfo } from "../../utils/data/TestData/";

const handleToggleFavorite = jest.fn();

test("display all ArtPieces as a list", () => {
  render(
    <ArtPieces
      pieces={pieces}
      handleToggleFavorite={handleToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
  const artPieces = screen.getAllByRole("listitem");
  expect(artPieces).toHaveLength(pieces.length);
});

test("displays each artPieces image", () => {
  render(
    <ArtPieces
      pieces={pieces}
      handleToggleFavorite={handleToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
  const artPieceImages = screen.getAllByRole("img");
  expect(artPieceImages).toHaveLength(pieces.length);
});
