import styled from 'styled-components';

const FooterStyle = styled.footer`
    background-color: #344966;
    text-align: center;
    padding: 1%;
`
const TextStyle = styled.p`
    color: #F0F4EF;
`;


export default function Footer(){
    return(
        <FooterStyle>
            {/*I used "as = " to have two different tags have the same styling. I found it from this website: https://css-tricks.com/dry-ing-up-styled-components/*/}
            <TextStyle>All rights reserved by Wynn Musselman. <TextStyle as="a" href = "">Credits. &#169;</TextStyle></TextStyle>
        </FooterStyle>
    )
}