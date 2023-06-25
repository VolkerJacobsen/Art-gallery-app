import { render, screen } from "@testing-library/react";
import ArtPieceDetailPage from "./[slug]";
import { pieces } from "../../utils/data/TestData/";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      query: { slug: "orange-red-and-green" },
      asPath: "/art-pieces/orange-red-and-green",
    };
  },
}));

test("displays a back button", () => {
  render(<ArtPieceDetailPage pieces={pieces} />);

  const artPieceBackButton = screen.getByRole("button");
  expect(artPieceBackButton).toBeInTheDocument();
  expect(artPieceBackButton).toHaveAttribute("title", "Go back");
});
