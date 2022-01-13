import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { AiOutlineLogout } from "react-icons/ai";
import { HeaderBackground, HeaderWrapper, UserInfo } from "./styles";
import logo from "../../assets/images/logo.png";


const HeaderComponent = () => {
    const navigate = useNavigate();
    const { user} = useAuth();
    
    const handleLogoff = () => {
        navigate('/');
    }

    return (
        <HeaderBackground>
            <HeaderWrapper>
                <img src={logo} alt="logo" width="auto" height="48"/>

                <UserInfo>

                    <p> Olá {user.firstName + ' ' + user.lastName}</p>
                    <strong>{user.accountNumber} - {user.accountDigit}</strong>
                    <a href="#" onClick={handleLogoff}><AiOutlineLogout/>Logout</a>
                </UserInfo>
            </HeaderWrapper>
        </HeaderBackground>
    )
}

export default HeaderComponent;