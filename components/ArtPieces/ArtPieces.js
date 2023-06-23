import ArtPiecesPreview from "../ArtPiecesPreview/ArtPiecesPreview";
import styled from "styled-components";

const List = styled.li`
  list-style: none;
`;

export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => (
        <List key={piece.slug}>
          <ArtPiecesPreview
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
            width={piece.dimensions.width}
            height={piece.dimensions.height}
          />
        </List>
      ))}
    </>
  );
}
