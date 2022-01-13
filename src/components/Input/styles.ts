import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 46px;

    background: ${({ theme }) => theme.colors.background};
    border: 1.5px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;

    margin: 20px 0px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1000;

    input{
        font-size: 0.75rem;
        font-weight: 400;
        background: transparent;
        border: 0;
        width: 100%;
        margin: 0;
    }
`