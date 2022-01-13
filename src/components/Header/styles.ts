import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justifify-content: center;
    color: #fff;
    padding: 10px;
    line-height: 1.5;
a{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background:#FF6347;
    width: 50%;
    padding: 5px 0px;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    border-radius: 4px;
    text-decoration: none;
    color: #fff;
}
p{
    font-size: 18px;
    color: #fff;
    font-weight: bold;
}
`

export const HeaderBackground = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background:  #404040;
    box-shadow: 0px 1.5px rgba(0,0,0,0.15);
`