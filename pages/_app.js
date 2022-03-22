import { globalStyles, lightTheme } from "../shared/styles";
import { ThemeProvider } from "@emotion/react";

const App = ({ Component, pageProps }) => (
    <>
        <ThemeProvider theme={lightTheme}>
            {globalStyles}
            <Component {...pageProps} />
        </ThemeProvider>
    </>
);

export default App;
