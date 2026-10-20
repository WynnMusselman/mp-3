import { Routes, Route } from "react-router";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import ClubInvolvement from "./mains/ClubInvolvement.tsx";
import ProfessionalExperience from "./mains/ProfessionalExperience.tsx";
import VolunteerExperience from "./mains/VolunteerExperience.tsx";
import Projects from "./mains/Projects.tsx";
import Nav from "../components/Nav";

export default function Root() {
    return(
        <>
            <Nav />
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