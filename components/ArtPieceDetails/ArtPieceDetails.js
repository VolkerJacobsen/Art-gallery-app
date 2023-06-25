import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  border: 2px solid black;
  border-radius: 30px;
`;

const Heading = styled.h2`
  font-size: 1.3rem;
  line-height: 1.3;
  margin: 20px 20px 20px 20px;
`;

const ArtistInfo = styled.p`
  font-size: 1rem;
  margin: 0 20px 5px 20px;
`;

const GenreInfo = styled.p`
  font-size: 0.8rem;
  margin: 0 20px 40px 20px;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  width,
  height,
  priority,
}) {
  const GenreInfoData = (
    <>
      <em>{genre}</em>
    </>
  );

  return (
    <>
      <StyledImage
        alt={`${title} by ${artist}`}
        src={image}
        width={width}
        height={height}
        priority={priority}
      />
      <Heading>{`${title}`}</Heading>
      <ArtistInfo>
        {artist} ({year})
      </ArtistInfo>
      <GenreInfo>{GenreInfoData}</GenreInfo>
    </>
  );
}
