import styled from "styled-components";
import { useState} from "react";
import {useColor} from "../useColor.ts";


const InnerCol = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 2%;
    
    @media screen and (max-width: 750px){
        flex-direction: row;
        justify-content: center;
    }
`;

const InputStyle = styled.input`
    width: 15vw;
    border: 2px dashed #344966;
    background-color: #BFCC94;
    padding: 3%;
    font-size: calc(2px + 1.2vw);

    //to style the placeholder, I consulted the styled component docs: https://styled-components.com/docs/advanced#referring-to-other-components
    &::placeholder{
        visibility: hidden;
    }

    @media screen and (max-width: 750px){
        margin: 2%;
        padding: 5%;

        &::placeholder{
            visibility: visible;
            font: calc(2px + 1.8vw) damion, sans-serif, sans;
            color: #344966;
        }
    }
`;

const OutputStyle = styled.h3`
    color: ${(props) => props.theme === true ? "red" : "red"};
    //"#344966"
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
    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [output, setOutput] = useState(0);


    function doAdd(){
        setOutput(Number(firstNum) + Number(secondNum));
    }

    function doSub(){
        setOutput(Number(firstNum) - Number(secondNum));
    }

    function doMul(){
        setOutput(Number(firstNum) * Number(secondNum));
    }

    function doDiv(){
        setOutput(Number(firstNum) - Number(secondNum));
    }

    function doPow(){
        let temp = 1;

        for(let i = 1; i <= Number(secondNum); i++){
            temp = Number(firstNum) * Number(temp);
        }
        setOutput(Number(temp));
    }


    function doClear(){
        setFirstNum("");
        setSecondNum("");
        setOutput(0);
    }

    return(
        <main>
            <div className="info-section">
                <h3>My Calculator</h3>
                <p>September 2026</p>

                <div className="two-col">

                    <InnerCol>
                        {/*first number input*/}
                        <LabelStyle htmlFor="first">first Number:</LabelStyle>
                        <InputStyle
                            placeholder="first number"
                            value = {firstNum}
                            onChange = {(e) => setFirstNum(e.target.value)}
                        />

                        {/*second number input*/}
                        <LabelStyle htmlFor="second">Second Number:</LabelStyle>
                        <InputStyle
                            placeholder="second number"
                            value = {secondNum}
                            onChange = {(e) => setSecondNum(e.target.value)}
                        />
                    </InnerCol>

                    <InnerCol>

                        <div className="two-col">
                            <InnerCol className="inner-col">
                                <ButtonStyle onClick = {doAdd}>+</ButtonStyle>
                                <ButtonStyle onClick={doSub}>-</ButtonStyle>
                                <ButtonStyle onClick={doMul}>*</ButtonStyle>
                            </InnerCol>
                            <InnerCol className="inner-col">
                                <ButtonStyle onClick={doDiv}>/</ButtonStyle>
                                <ButtonStyle onClick={doPow}>^</ButtonStyle>
                                <ButtonStyle onClick={doClear}>clear</ButtonStyle>
                            </InnerCol>
                        </div>
                    </InnerCol>
                </div>

                <OutputStyle style={{color:useColor(output)}}>{output}</OutputStyle>
            </div>


        </main>
    )
}