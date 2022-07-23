import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        height: 100vh;
        width: 100%;
        font-family: 'IBM Plex Sans', sans-serif;
    }
`;

export default GlobalStyle;