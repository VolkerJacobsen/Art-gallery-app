import ArtPiecesPreview from "../ArtPiecesPreview/ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecesPreview
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
          />
        </li>
      ))}
    </>
  );
}
