import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";
import styled from "styled-components";
import Spotlight from "@/components/Spotlight/Spotlight";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(URL);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  const randomArtPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <Main>
      <h1>Art Gallery</h1>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
        width={randomArtPiece.dimensions.width}
        height={randomArtPiece.dimensions.height}
      />
      <ArtPieces pieces={pieces} />
    </Main>
  );
}
