import headshot from "../../assets/professional-headshot.jpg";
import styled from "styled-components";

const TwoCol = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
`

const ImgStyle = styled.img`
    max-width: 30vw;
    padding: 3%;
`


export default function Home() {
    return (
        <>
            <main>
                <h2>About Me</h2>

                <TwoCol>

                    <ImgStyle src={headshot} alt="Headshot of Wynn Musselman"></ImgStyle>

                    <p>
                        Hello! My name is Wynn Musselman, and I am a student at Boston University.
                        I am studying Computer Science with a minor in Political Science.
                        During previous semesters, I interned at BU's EL Connector office and completed
                        an internship in Paris for a tech start-up. Currently, I am the Bytes Lead for
                        the Girls Who Code chapter, a Junior Development Team Lead for the Hack4Impact
                        chapter, a grader for the Computer Science department, and a Community Ambassador
                        for Spark!.
                        For fun, I like to hang out with friends, play video games, code my own projects,
                        and explore Boston!
                    </p>
                </TwoCol>

                <p>
                    On this website, you will find my education, experience, project, and other information
                    that may be of interest for you.
                </p>
            </main>
        </>
    )
}