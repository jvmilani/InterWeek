import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



*{
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap');
        /* font-family: 'Montserrat', sans-serif; */
        font-family: 'Open Sans', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({theme}) => theme.colors.background};
    }
`;

export default GlobalStyle;