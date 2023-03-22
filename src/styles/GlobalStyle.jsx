import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts/NanumSquareNeo.css";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        text-decoration: none;
        font-family:NanumSquareNeo-Variable;
    }
    body{
        list-style: none;
        color: black;
        padding: 0;
        margin: 0;
        background-color: white;
        font-family:NanumSquareNeo-Variable;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
