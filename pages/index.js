import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(URL);

  console.log(pieces);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Main>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={pieces} />
    </Main>
  );
}
