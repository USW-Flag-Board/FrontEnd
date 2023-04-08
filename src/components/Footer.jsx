import styled from "styled-components";

const Footer = () => {
    return (
        <FooterBox />
    )
}

const FooterBox = styled.div`
    width: 100vw;
    background-color: black;
    height: 3vh;
    bottom: 0;
    position: fixed;
`;

export default Footer;