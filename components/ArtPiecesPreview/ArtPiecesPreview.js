import Image from "next/image";

export default function ArtPiecesPreview({
  image,
  title,
  artist,
  width,
  height,
}) {
  return (
    <figure>
      <Image
        alt={`${title} by ${artist}`}
        src={image}
        width={width}
        height={height}
      />
      <figcaption>{`"${title}" by ${artist}`} </figcaption>
    </figure>
  );
}
