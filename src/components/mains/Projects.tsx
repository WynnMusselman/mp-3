
export default function ProfessionalExperience() {
    return(
        <>
            <main>
                <h2>Projects</h2>


                {/*Monkey Game*/}
                <div className="info-section">
                    <h3><a href="https://github.com/WynnMusselman/Monkeys-Jumping-on-the-Bed-Simulator">Monkeys Jumping
                        on the Bed Simulator</a></h3>
                    <p>September 2026</p>
                    <p>
                        I developed this game using Godot and GDScript while also implementing sprites I designed
                        myself. In the game, the player has to click monkeys jumping on the bed to throw them off,
                        with each level introducing more monkeys.
                    </p>
                </div>

                {/*Society of Math Club*/}
                <div className="info-section">
                    <h3><a href="https://github.com/WynnMusselman/Society-of-Math-Club">Society of Math Club Website</a>
                    </h3>
                    <p>August 2026</p>
                    <p>
                        The Society of Math Club's website was originally created by someone who did not know any
                        web development. Because of this, much of the code was difficult to read and did not
                        follow convention while the design needed improvements. I rewrote almost all the CSS
                        and edited much of the HTML to follow convention. I added many comments to ensure that
                        future developers of the site can make changes easily, even if they don't know how to code.
                        I also fixed the design based on advice from a graphic designer.
                    </p>
                </div>

                {/*Let's Dress Up*/}
                <div className="info-section">
                    <h3><a href="https://github.com/WynnMusselman/LetsDressUp">Let's Dress Up</a></h3>
                    <p>August 2025</p>
                    <p>
                        I programmed an interactive Java desktop game, where users participate in randomized style
                        challenges. I implemented layered graphics for clothing items, background audio, and
                        event listeners for changes in game state. I also designed original artwork and icons
                        while integrating the custom assets within a Java Swing Interface
                    </p>
                </div>
            </main>
        </>
    )
}