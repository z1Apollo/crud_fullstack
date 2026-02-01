import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints } from "./breakpoints";

export const GlobalStyle = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family:  "Poppins", sans-serif;
      }

      html,
      body,
      #root {
        width: 100%;
        height: 100%;
        min-height: 100%;
      }

      html {
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
      }

      body {
        line-height: 1.5;
        font-family: system-ui, -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
          "Open Sans", "Helvetica Neue", sans-serif;

        background-color: #fff;
        color: #000;

        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }

      #root {
        display: flex;
        flex-direction: column;
        isolation: isolate;
      }

      img,
      picture,
      video,
      canvas,
      svg {
        display: block;
        max-width: 100%;
      }

      input,
      button,
      textarea,
      select {
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        outline: none;
      }

      button {
        cursor: pointer;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      ul,
      ol {
        list-style: none;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
    `}
  />
);

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40%;

    h1 {
        color: #5050a5;
        font-size: 50px;
    }

    p {
        font-size: 20px;
        color: #0000008f;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;

        h1 {
            font-size: 3.4vh;
        }

        p {
            font-size: 13px;
        }
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    height: 100vh;
    margin-top: 2rem;

    @media (max-width: ${breakpoints.mobile}) {
        h1 {
            font-size: 10px;
        }
    }
`