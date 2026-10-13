import { Routes, Route } from "react-router";
import Home from "../pages/Home.tsx";
import Education from "../pages/Education.tsx";
import ClubInvolvement from "../pages/ClubInvolvement.tsx";
import ProfessionalExperience from "../pages/ProfessionalExperience.tsx";
import VolunteerExperience from "../pages/VolunteerExperience.tsx";
import Projects from "../pages/Projects.tsx";

export default function Root() {
    return(
        <>
            <Nav/>
            <Routes>
                <Route path = {"/"} element = {<Home />}/>
                <Route path ={"./pages/Education"} element = {<Education />}/>
                <Route path ={"./pages/ClubInvolvement"} element = {<ClubInvolvement />}/>
                <Route path ={"./pages/ProfessionalExperience"} element = {<ProfessionalExperience />}/>
                <Route path ={"./pages/VolunteerExperience"} element = {<VolunteerExperience />}/>
                <Route path ={"./pages/Projects"} element = {<Projects />}/>
            </Routes>
        </>
    )
}