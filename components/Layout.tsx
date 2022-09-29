import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Konecto | Coming Soon" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Welcome to Konecto Ltd, Something Cool is cooking in here, but its not ready yet."
      />
      <meta property="og:title" content={`${title}`} />
      <meta
        property="og:description"
        content="Welcome to Konecto Ltd, Something Cool is cooking in here, but its not ready yet."
      />
      <meta property="og:url" content="https://konecto.ltd/" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
