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
        color: white;
        padding: 0;
        margin: 0;
        background-color: #2C2C2C;
        font-family:NanumSquareNeo-Variable;
    }
`;

export default GlobalStyle;
