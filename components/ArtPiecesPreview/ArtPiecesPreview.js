import Image from "next/image";

export default function ArtPiecesPreview({ image, title, artist }) {
  return (
    <figure>
      <Image
        alt={`${title} by ${artist}`}
        src={image}
        width="1920"
        height="2500"
      />
      <figcaption>{`"${title}" by ${artist}`} </figcaption>
    </figure>
  );
}
