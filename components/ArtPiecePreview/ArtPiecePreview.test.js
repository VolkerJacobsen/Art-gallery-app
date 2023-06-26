import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";
import { piece } from "../../utils/data/TestData/";

test("displays an image with a source attribute", () => {
  render(
    <ArtPiecePreview
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      width={piece.dimensions.width}
      height={piece.dimensions.height}
    />
  );

  const artPieceImage = screen.getByRole("img");
  expect(artPieceImage).toHaveAttribute(
    "src",
    expect.stringContaining(
      encodeURIComponent(
        "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
      )
    )
  );
});

test("displays a title of an artPiece", () => {
  render(
    <ArtPiecePreview
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      width={piece.dimensions.width}
      height={piece.dimensions.height}
    />
  );

  const artPieceTitle = screen.getByText(/orange red and green/i);
  expect(artPieceTitle).toBeInTheDocument();
});

test("displays the artist of the artPiece", () => {
  render(
    <ArtPiecePreview
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      width={piece.dimensions.width}
      height={piece.dimensions.height}
    />
  );

  const artPieceArtist = screen.getByText(/steve johnson/i);
  expect(artPieceArtist).toBeInTheDocument();
});
