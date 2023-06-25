import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const URL = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);

  function handleToggleFavorite(slug) {
    console.log("favorite button clicked", artPiecesInfo);
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);

      if (info) {
        return artPiecesInfo.map((artPieceInfo) =>
          artPieceInfo.slug === slug
            ? { ...artPieceInfo, isFavorite: !artPieceInfo.isFavorite }
            : artPieceInfo
        );
      }

      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  if (error)
    return (
      <div>
        Sry, something went wrong.
        <br />
        {error.message}
      </div>
    );
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={pieces}
          artPiecesInfo={artPiecesInfo}
          handleToggleFavorite={handleToggleFavorite}
        />
      </Layout>
    </>
  );
}
