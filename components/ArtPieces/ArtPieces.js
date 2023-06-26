import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const List = styled.ul`
  list-style: none;
`;

export default function ArtPieces({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <List>
      {pieces.map((piece, index) => {
        const artPieceInfo = artPiecesInfo.find(
          (info) => info.slug === piece.slug
        );
        return (
          <li key={piece.slug}>
            <>
              <FavoriteButton
                isFavorite={artPieceInfo ? artPieceInfo.isFavorite : null}
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
          </li>
        );
      })}
    </List>
  );
}
