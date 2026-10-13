import { Link } from 'react-router-dom';

export default function Nav() {
    return(
        <nav>
            <ul>
                <li><Link to = {"/"}>Home</Link></li>
                <li><Link to = {"/Education"}>Education</Link></li>
                <li><Link to = {"/ClubInvolvement"}>Club Involvement</Link></li>
                <li><Link to = {"/ProfessionalExperience"}>Professional Experience</Link></li>
                <li><Link to = {"/VolunteerExperience"}>Volunteer Experience</Link></li>
                <li><Link to = {"/Projects"}>Projects</Link></li>
            </ul>
        </nav>
    )
}