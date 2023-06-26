import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";
import { piece } from "../../utils/data/TestData/";

test("displays an image of an artPiece", () => {
  render(
    <Spotlight
      image={piece.imageSource}
      artist={piece.artist}
      width={piece.dimensions.width}
      height={piece.dimensions.height}
    />
  );
  const artPieceImageSpotlight = screen.getByRole("img");
  expect(artPieceImageSpotlight).toBeInTheDocument();
});

test("displays the artist of the artPiece", () => {
  render(
    <Spotlight
      image={piece.imageSource}
      artist={piece.artist}
      width={piece.dimensions.width}
      height={piece.dimensions.height}
    />
  );

  const artPieceArtist = screen.getByText(/^steve johnson$/i);
  expect(artPieceArtist).toBeInTheDocument();
});
