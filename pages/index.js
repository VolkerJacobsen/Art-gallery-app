import styled from "styled-components";
import Spotlight from "@/components/Spotlight/Spotlight";
import DefaultHead from "@/components/Layout/Head/DefaultHead";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  margin-bottom: var(--navigation-height);
`;

export default function SpotlightPage({ pieces }) {
  const randomArtPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <Main>
      <DefaultHead pageTitle="Spotlight" />
      <h1>Art Gallery</h1>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
        width={randomArtPiece.dimensions.width}
        height={randomArtPiece.dimensions.height}
      />
    </Main>
  );
}
