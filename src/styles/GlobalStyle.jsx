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
        color: white;
        margin: 0;
        background-color: #2C2C2C;
        font-family:NanumSquareNeo-Variable;
    }
`;

export default GlobalStyle;
