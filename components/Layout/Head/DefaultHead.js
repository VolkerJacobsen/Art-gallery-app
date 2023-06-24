import Head from "next/head";

export default function DefaultHead({ pageTitle }) {
  return (
    <Head>
      <title>{pageTitle ? `Art Gallery: ${pageTitle}` : "Art Gallery"}</title>
      <meta name="description" content="Discover art in a new way!" />
    </Head>
  );
}
