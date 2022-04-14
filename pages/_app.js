import { globalStyles, lightTheme } from "../shared/styles";
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";

import AppContainer from "../components/AppContainer";
import QuestionWrapper from "../lib/questionContext";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Etudi'quoi</title>
        <meta
          name="description"
          content="Etudi'Quoi c'est l'app qui te permet te trouver la formation qui te correspond. T'en dis quoi ?"
        />
        <meta name="keywords" content="Keywords" />
        <meta name="theme-color" content="#317EFB" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* <link rel="manifest" href="/manifest.json" /> */}

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etudiquoi.com/" />
        <meta property="og:title" content="Etudi'quoi" />
        <meta
          property="og:description"
          content="Etudi'Quoi c'est l'app qui te permet te trouver la formation qui te correspond. T'en dis quoi ?"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/hf10ee93o/image/upload/v1648409477/etudiquoi-meta-image_tdbk4e.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://etudiquoi.com/" />
        <meta property="twitter:title" content="Etudi'quoi" />
        <meta
          property="twitter:description"
          content="Etudi'Quoi c'est l'app qui te permet te trouver la formation qui te correspond. T'en dis quoi ?"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/hf10ee93o/image/upload/v1648409477/etudiquoi-meta-image_tdbk4e.jpg"
        />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <QuestionWrapper>
          <AppContainer>
            {globalStyles}
            <Component {...pageProps} />
          </AppContainer>
        </QuestionWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
