import Image from "next/image";

export default function Spotlight({ image, artist, width, height }) {
  return (
    <figure>
      <Image
        src={image}
        alt={`An artpiece by ${artist}`}
        width={width}
        height={height}
      />
      <figcaption>{artist}</figcaption>
    </figure>
  );
}
