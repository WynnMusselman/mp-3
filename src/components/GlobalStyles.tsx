import { createGlobalStyle } from 'styled-components';
import damion_font from "../assets/Damion/Damion-Regular.ttf";


const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
    }

    /*damion font*/
    @font-face {
        font-family: damion;
        src: url("${damion_font}");
    }
    

    /*text styling*/
    h2{
        font: calc(2px + 3.3vw) damion, sans-serif, sans;
        padding: 3%;
    }

    h3{
        font-size: calc(2px + 2.3vw);
    }

    p{
        color: #172B3A;
        font-size: calc(2px + 1.4vw);
    }
    
    /*main*/
    main{
        width: 70%;

        /*
            I used min-height instead of height because height is more rigid and my content
            was overflowing on some pages. Min-height just sets a floor value and allowed my
            content to fill the page and not overflow
        */
        min-height: 100vh;
        text-align: center;
    }

    main p{
        padding: 2%;
    }

    /*styles sections of information on different pages*/
    .info-section{
        margin: 3%;
    }

    .info-section h3{
        padding: 0.5%;
        color: #344966;
    }

    .info-section p{
        padding: 0.5%;
    }

    /*calculator section*/
    .inner-col{
        display: flex;
        flex-direction: column;
        margin: auto 2%;
    }

    .inner-col input{
        width: 15vw;
        border: 2px dashed #344966;
        background-color: #BFCC94;

    }

    .inner-col button{
        width: 8vw;
        margin: 2%;
        padding: 2%;

        background-color: #344966;
        color: #F0F4EF;
        font: calc(2px + 1.8vw) damion, sans-serif, sans;
        border: 2px dashed #BFCC94;
    }

    .inner-col button:hover{
        background-color: #213347;
    }

    label{
        font: calc(2px + 1.4vw) damion, sans-serif, sans;
    }

    input::placeholder{
        visibility: hidden;
    }
    

    /*when the screen is shrunk*/
    @media screen and (max-width: 750px){

        /*header*/
        header{
            text-align: center;
        }

        /*navigation*/
        #nav-main-col{
            flex-direction: column;
        }

        nav ul{
            display: flex;
            flex-direction: row;
            /*justify-content: center;*/
        }
        nav ul li{
            margin: 2%;
            padding: 1%;
            width: 100%; /*makes each nav box the same size*/
        }

        nav, main{
            width: 100%;
        }

        /*two column display*/
        .two-col{
            display: flex;
            flex-direction: column;
            /*justify-content: center;*/
        }

        .two-col img{
            margin: auto;
        }

        /*calculator*/
        .inner-col{
            flex-direction: row;
            justify-content: center;
        }

        label{
            display: none;
        }

        input{
            margin: 2%;
            padding: 5%;
        }

        input::placeholder{
            visibility: visible;
            font: calc(2px + 1.8vw) damion, sans-serif, sans;
            color: #344966;
        }
    }
    
`

export default function GlobalStyles() {
    return (
        <>
            <GlobalStyle />
        </>
    )
}