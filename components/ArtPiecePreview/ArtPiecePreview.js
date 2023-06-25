import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Figure = styled.figure`
  margin-bottom: 30px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  border: 2px solid black;
  border-radius: 30px;
`;

const FigCaption = styled.figcaption`
  margin: 5px 30px 0 30px;
  line-height: 1.3;
  font-size: 0.8rem;
`;

export default function ArtPiecePreview({
  slug,
  image,
  title,
  artist,
  width,
  height,
  priority,
}) {
  const FigCaptionText = (
    <>
      <strong>{title}</strong> by&nbsp;{artist}
    </>
  );

  return (
    <StyledLink href={`/art-pieces/${slug}`}>
      <Figure>
        <StyledImage
          alt={`${title} by ${artist}`}
          src={image}
          width={width}
          height={height}
          priority={priority}
        />
        <FigCaption>{FigCaptionText}</FigCaption>
      </Figure>
    </StyledLink>
  );
}
