import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(URL);

  console.log(pieces);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
