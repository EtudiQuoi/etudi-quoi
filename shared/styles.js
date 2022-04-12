import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

export const lightTheme = {
  primary: "#0C53A3",
  primaryHover: "#84B9EB",
  accentColor: "#E94057",
  accentColorHover: "#F6A0AC",
  darkColor: "#083262",
  darkShade: "#161C2E",
  baseColor: "#FFFFFF",
  boxShadow: "0px 4px 16px rgba(52, 89, 131, 0.16)",
  backgroundGradient: "linear-gradient(180deg, #FFFFFF 0%, #D6E0FF 100%);",
  primaryGradient:
    "radial-gradient(100% 100% at 100% 100%, #A4D2FF 0%, #3C84C8 50.52%, #054999 100%)",
  transition: "0.3s ease",
};

export const globalStyles = (
  <Global
    styles={css`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      html,
      body {
        background: #171717;
        min-height: 100%;
        font-family: "Epilogue", Helvetica, Arial, sans-serif;
        font-size: 16px;
      }
    `}
  />
);

export const Container = styled.div`
  overflow: hidden;
  margin: auto;
  height: 100vh;
  position: relative;
  width: 100vw;
  padding: 1rem 0;
  max-width: 480px;
  background: ${({ theme }) => theme.backgroundGradient};
  text-align: center;
`;
