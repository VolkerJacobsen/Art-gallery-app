import ArtPiecesPreview from "../ArtPiecesPreview/ArtPiecesPreview";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li``;

export default function ArtPieces({ pieces }) {
  return (
    <List>
      {pieces.map((piece) => (
        <ListItem key={piece.slug}>
          <ArtPiecesPreview
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
            width={piece.dimensions.width}
            height={piece.dimensions.height}
          />
        </ListItem>
      ))}
    </List>
  );
}
