import { globalStyles, lightTheme } from "../shared/styles";
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";

import QuestionWrapper from "../lib/questionContext";

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <title>Etudi'Quoi</title>
            <meta name="description" content="Etudi'Quoi c'est l'app qui te permet te trouver la formation qui te correspond. T'en dis quoi ?" />
            <meta name="keywords" content="Keywords" />
            <meta name="theme-color" content="#317EFB" />

            <link rel="manifest" href="/manifest.json" />
            <link href="/icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
            <link href="/icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
            <link rel="apple-touch-icon" href="/apple-icon.png" />
        </Head>
        <ThemeProvider theme={lightTheme}>
            <QuestionWrapper>
                {globalStyles}
                <Component {...pageProps} />
            </QuestionWrapper>
        </ThemeProvider>
    </>
);

export default App;
