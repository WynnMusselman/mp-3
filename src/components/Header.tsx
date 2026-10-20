import styled from "styled-components";

const HeaderStyle = styled.header `
    background-color: #344966;
    color: #F0F4EF;

    padding: 2%;
    text-align: left;

    @media screen and (max-width: 750px){
        width: 100%;
    }
`;

const H1Style = styled.h1 `
    font: calc(2px + 4vw) damion, sans-serif, sans;

    @media screen and (max-width: 750px){
        text-align: center;
`;

const PStyle = styled.p `
    color: #F0F4EF;

    @media screen and (max-width: 750px){
        text-align: center;
`;


export default function Header() {
    return(
        <HeaderStyle>
            <H1Style>Wynn Musselman</H1Style>
            <PStyle>My Online Resume</PStyle>
        </HeaderStyle>
    )
}