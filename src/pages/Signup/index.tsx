import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';
import Card from '../../components/Card';
import imageLogo from '../../assets/images/logo.png';
import imageBg from '../../assets/images/bg.jpg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
export const Signup = () => {
    
    const navigate = useNavigate();

    const handleToSign = () => {
        navigate('/dashboard')
    }
    return(
        <Wrapper>
            <Background image={imageBg}/>
            <Card width="403px" >
                <img src={imageLogo} width={172} height={61} alt="logo" />
                <InputContainer>
                    <Input placeholder="Nome"/>
                    <Input placeholder="Sobrenome"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Senha" type="password"/>
                    <Input placeholder="Confirme sua senha" type="password"/>
                </InputContainer>

                <ButtonContainer>
                    <Button type="button" onClick={handleToSign}>Entrar</Button>
                    <p>Já tem uma conta? <Link to="/">Entre já!</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default Signup;