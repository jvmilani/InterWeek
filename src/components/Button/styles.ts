import styled from "styled-components";

export const ButtonContainer = styled.div`
    width: 100%;
    height: 46px;

    background: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;

    margin-bottom: 20px;

    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.background};
    cursor: pointer;
    justify-content: center;

    z-index: 1000;

    input{
        font-size: 0.75rem;
        font-weight: 400;
        background: transparent;
        border: 0;
        width: 100%;
        margin: 0 20px;
    }
`