import styled from "styled-components";

export const StatementItemContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    border-radius: 4px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0,0.2);
`

export const ItemStatement = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Value = styled.text`
    font-size: 12px;
    font-weight: bold;
    color: ${({ type, theme }) => type === 'paid' ?  '#FF6347' : '#32cd32'};
`

export const StatementItemImage = styled.div<{
    type: 'paid' | 'received'
}>`

    width: 60px;
    height: 60px;
    margin: 10px 10px 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.background};
    border-radius: 10px;

    background-color: ${({ type, theme }) => type === 'paid' ?  '#FF6347' : '#32cd32'};
`

export const StatementItemInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    p{
        font-size: 0.75rem;
    }
`