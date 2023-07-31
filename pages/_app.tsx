import { useEffect } from "react";
import type { AppProps } from "next/app";
import SSRProvider from "react-bootstrap/SSRProvider";
import { hotjar } from "react-hotjar";

// styles
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// component
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   hotjar.initialize(3483838, 6)
  // }, [])
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
