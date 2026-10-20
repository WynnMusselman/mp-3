import styled from "styled-components";


const InnerCol = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 2%;
`;
const InputStyle = styled.input`
    width: 15vw;
    border: 2px dashed #344966;
    background-color: #BFCC94;

    //to style the placeholder, I consulted the styled component docs: https://styled-components.com/docs/advanced#referring-to-other-components
    &::placeholder{
        visibility: hidden;
    }
`;

const ButtonStyle = styled.button`
    width: 8vw;
    margin: 2%;
    padding: 2%;

    background-color: #344966;
    color: #F0F4EF;
    font: calc(2px + 1.8vw) damion, sans-serif, sans;
    border: 2px dashed #BFCC94;
    
    //to create the hover effect, I consulted the styled component docs: https://styled-components.com/docs/advanced#referring-to-other-components
    &:hover {
        background-color: #213347;
    }
`;

const LabelStyle = styled.label`
    font: calc(2px + 1.4vw) damion, sans-serif, sans;
`;


export default function Calculator() {
    return(
        <>
            <div className="info-section">
                <h3>My Calculator</h3>
                <p>September 2026</p>

                <div className="two-col">

                    <InnerCol>
                        <LabelStyle htmlFor="first">first Number:</LabelStyle><InputStyle id="first" placeholder="first number"/>
                        <LabelStyle htmlFor="second">Second Number:</LabelStyle><InputStyle id="second" placeholder="second number"/>
                    </InnerCol>

                    <InnerCol>

                        <div className="two-col">
                            <InnerCol className="inner-col">
                                <ButtonStyle onclick="doAdd">+</ButtonStyle>
                                <ButtonStyle onClick="doSub()">-</ButtonStyle>
                                <ButtonStyle onClick="doMul()">*</ButtonStyle>
                            </InnerCol>
                            <InnerCol className="inner-col">
                                <ButtonStyle onClick="doDiv()">/</ButtonStyle>
                                <ButtonStyle onClick="doPow()">^</ButtonStyle>
                                <ButtonStyle onClick="doClear()">clear</ButtonStyle>
                            </InnerCol>
                        </div>
                    </InnerCol>
                </div>

                <h3 id="output"></h3>
            </div>


        </>
    )
}