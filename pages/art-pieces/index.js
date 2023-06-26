import styled from "styled-components";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import DefaultHead from "@/components/Layout/Head/DefaultHead";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  margin-bottom: var(--navigation-height);
`;

export default function ArtPiecesPage({ pieces, handleToggleFavorite }) {
  return (
    <Main>
      <DefaultHead pageTitle="Art Pieces" />
      <h1>Art Gallery</h1>
      <ArtPieces pieces={pieces} handleToggleFavorite={handleToggleFavorite} />
    </Main>
  );
}
