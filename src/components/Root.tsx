import { Routes, Route } from "react-router";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles.tsx";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import ClubInvolvement from "./mains/ClubInvolvement.tsx";
import ProfessionalExperience from "./mains/ProfessionalExperience.tsx";
import VolunteerExperience from "./mains/VolunteerExperience.tsx";
import Projects from "./mains/Projects.tsx";
import Header from "./Header.tsx"
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";


const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    background-color: #F0F4EF;
`

const NavMainCol = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`


export default function Root() {
    return(
        <>
            {/*adds in global styles*/}
            <GlobalStyles />

            <PageWrapper>
                <Header />

                {/*creates two column layout for nav and main*/}
                <NavMainCol>
                    <Nav />
                    <Routes>
                        <Route path = {"/"} element = {<Home />}/>
                        <Route path ={"./pages/Education"} element = {<Education />}/>
                        <Route path ={"./pages/ClubInvolvement"} element = {<ClubInvolvement />}/>
                        <Route path ={"./pages/ProfessionalExperience"} element = {<ProfessionalExperience />}/>
                        <Route path ={"./pages/VolunteerExperience"} element = {<VolunteerExperience />}/>
                        <Route path ={"./pages/Projects"} element = {<Projects />}/>
                    </Routes>
                </NavMainCol>

                <Footer />
            </PageWrapper>
        </>
    )
}