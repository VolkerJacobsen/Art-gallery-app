import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails";
import { piece } from "../../utils/data/TestData/";

test("displays an image with a source attribute", () => {
  render(
    <ArtPieceDetails
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
      width={piece.dimensions.width}
      height={piece.dimensions.height}
      priority={true}
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
    <ArtPieceDetails
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
      width={piece.dimensions.width}
      height={piece.dimensions.height}
      priority={true}
    />
  );

  const artPieceTitle = screen.getByText(/orange red and green/i);
  expect(artPieceTitle).toBeInTheDocument();
});

test("displays the artist of the artPiece", () => {
  render(
    <ArtPieceDetails
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
      width={piece.dimensions.width}
      height={piece.dimensions.height}
      priority={true}
    />
  );

  const artPieceTitle = screen.getByText(/steve johnson/i);
  expect(artPieceTitle).toBeInTheDocument();
});

test("displays the year of the artPiece", () => {
  render(
    <ArtPieceDetails
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
      width={piece.dimensions.width}
      height={piece.dimensions.height}
      priority={true}
    />
  );

  const artPieceYear = screen.getByText(/(2018)/i);
  expect(artPieceYear).toBeInTheDocument();
});

test("displays the genre of the artPiece", () => {
  render(
    <ArtPieceDetails
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
      width={piece.dimensions.width}
      height={piece.dimensions.height}
      priority={true}
    />
  );

  const artPieceYear = screen.getByText(/^abstract painting$/i);
  expect(artPieceYear).toBeInTheDocument();
});
