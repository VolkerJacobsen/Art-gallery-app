import styled from "styled-components";
import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import DefaultHead from "@/components/Layout/Head/DefaultHead";
import { useRouter } from "next/router";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  margin-bottom: var(--navigation-height);
`;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 3rem;
  margin-left: 20px;
  cursor: pointer;
`;

export default function ArtPieceDetailPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const { imageSource, name, artist, year, genre, dimensions } = pieces.find(
    (piece) => piece.slug === slug
  );

  function handleGoBack() {
    router.push("/art-pieces");
  }

  return (
    <>
      <DefaultHead pageTitle={name} />
      <BackButton
        onClick={handleGoBack}
        title="Go back"
        aria-label="Go back to previous page"
        type="button"
      >
        &#8592;
      </BackButton>
      <Main>
        <ArtPieceDetails
          image={imageSource}
          title={name}
          artist={artist}
          year={year}
          genre={genre}
          width={dimensions.width}
          height={dimensions.height}
          priority={true}
        />
      </Main>
    </>
  );
}
