import styled from "styled-components";

const HeaderStyle = styled.header `
    background-color: #344966;
    color: #F0F4EF;

    padding: 2%;
    text-align: left;
`;

const H1Style = styled.h1 `
    font: calc(2px + 4vw) damion, sans-serif, sans;
`;

const PStyle = styled.p `
    color: #F0F4EF;
`;


export default function Header() {
    return(
        <HeaderStyle>
            <H1Style>Wynn Musselman</H1Style>
            <PStyle>My Online Resume</PStyle>
        </HeaderStyle>
    )
}