import styled from "styled-components";


export const HeaderBackground = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 70px;
    background-color: #19cd19;
`
export const UserScreen = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: calc(90vh - 70px);
    overflow: hidden;
    path{

        stroke: #fff;
        color: #fff;
        font-size: 1.5em;
    }
    h2{
        color: #32cd32;
    }
    h3{
        font-size: 24px;
        font-weight: 600;
        font-style: italic;
        color: #32cd32;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: 100%;
    }
`

export const Side = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 20px;
    padding-right: 20px;
    width: 50%;
    overflow: auto;
    max-height: 80vh;
    @media (max-width: 768px) {
        padding-top: 0px;
        /* overflow: hidden; */
        padding-right: 0px;
        padding: 20px 0px;
        width: 80%;
        /* height: 100%; */
    }
`

export const SaldoDashboard = styled.div`
    display: flex;
    justify-content: center; 
    flex-direction: column;
    background: linear-gradient(to left, #32cd32, #14cc15);
    width: 50%;
    min-width: 300px;
    height: 20vh;
    padding: 50px;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0,0,0, 0.2);
    h2{
        font-size: 30px;
        font-weight: bold;
        color: #fff;
    }
    h3{
        font-size: 24px;
        font-weight: 600;
        color: #fff;
    }
`

export const PixCode = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    justify-content: center;
    text-align: center;
    padding: 20px 0px;
    border-radius: 4px;
    background: rgba(66, 245, 105, 1);
    p{
        max-width: 90%;
        word-break: break-all;
        /* white-space: wrap; */
        /* max-width: 40ch; */
        font-size: 12px;
        color: #404040;
    }
`

export const InputArea = styled.div`
    display: flex;
    /* padding: 20px; */
    justify-content: space-between;
    align-items: center;
    height: calc(100vh-70px);
    width: 50%;
    @media (max-width: 768px) {
        width: 75%;
        
    }
    
`