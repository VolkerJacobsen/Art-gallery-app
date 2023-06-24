import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li``;

export default function ArtPieces({ pieces }) {
  return (
    <List>
      {pieces.map((piece, index) => (
        <ListItem key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
            width={piece.dimensions.width}
            height={piece.dimensions.height}
            priority={index < 2 ? true : null}
          />
        </ListItem>
      ))}
    </List>
  );
}
