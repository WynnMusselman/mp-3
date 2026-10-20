import { Link } from 'react-router-dom';
import styled from "styled-components";


const NavStyle = styled.nav`
    background-color: #BFCC94;
    width: 30%;
    padding: 4%;
`
const UlStyle = styled.ul`
    padding: 0;
    list-style: none;
`
const LiStyle = styled.li`
    background-color: #B4CDED;
    border: 2px dashed #344966;
    text-align: center;
    margin: 10% auto;
    padding: 4%;
`

const LinkStyle = styled(Link) `
    text-decoration: none;
    color: #344966;
    font: calc(2px + 1.4vw) damion, sans-serif, sans;
`

export default function Nav() {
    return(
        <NavStyle>
            <UlStyle>
                <LiStyle><LinkStyle to = {"/"}>Home</LinkStyle></LiStyle>
                <LiStyle><LinkStyle to = {"/Education"}>Education</LinkStyle></LiStyle>
                <LiStyle><LinkStyle to = {"/ClubInvolvement"}>Club Involvement</LinkStyle></LiStyle>
                <LiStyle><LinkStyle to = {"/ProfessionalExperience"}>Professional Experience</LinkStyle></LiStyle>
                <LiStyle><LinkStyle to = {"/VolunteerExperience"}>Volunteer Experience</LinkStyle></LiStyle>
                <LiStyle><LinkStyle to = {"/Projects"}>Projects</LinkStyle></LiStyle>
            </UlStyle>
        </NavStyle>
    )
}