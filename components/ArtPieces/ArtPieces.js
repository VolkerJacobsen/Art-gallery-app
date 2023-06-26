import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li``;

export default function ArtPieces({
  pieces,
  isFavorite,
  handleToggleFavorite,
}) {
  return (
    <List>
      {pieces.map((piece, index) => (
        <ListItem key={piece.slug}>
          <>
            <FavoriteButton
              isFavorite={piece.isFavorite}
              onToggleFavorite={() => handleToggleFavorite(piece.slug)}
              slug={piece.slug}
            />
            <ArtPiecePreview
              slug={piece.slug}
              image={piece.imageSource}
              artist={piece.artist}
              title={piece.name}
              width={piece.dimensions.width}
              height={piece.dimensions.height}
              priority={index < 2 ? true : null}
            />
          </>
        </ListItem>
      ))}
    </List>
  );
}
