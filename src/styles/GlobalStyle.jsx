import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts/NanumSquareNeo.css";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        text-decoration: none;
        font-family:NanumSquareNeo-Variable;
    }
    body{
        color: black;
        list-style: none;
        padding: 0;
        margin: 0;
        background-color: white;
        font-family:NanumSquareNeo-Variable;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
