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
        min-height: 100vh;
        text-align: center;
    }

    main p{
        padding: 2%;
    }

    /*styles sections of information on different pages*/

    .info-section h3{
        padding: 0.5%;
        color: #344966;
    }

    .info-section p{
        padding: 0.5%;
    }
    
    
    //creates a two column layout
    
    .two-col{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
    }
    

    /*when the screen is shrunk*/
    @media screen and (max-width: 750px){

        

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
    }
    
`

export default function GlobalStyles() {
    return (
        <>
            <GlobalStyle />
        </>
    )
}