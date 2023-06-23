import { render, screen } from "@testing-library/react";
import ArtPiecesPreview from "./ArtPiecesPreview";
import { piece } from "../../utils/data/TestData/";

test("displays an image with a source attribute", () => {
  render(
    <ArtPiecesPreview
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
