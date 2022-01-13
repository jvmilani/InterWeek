import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';
import Card from '../../components/Card';
import imageLogo from '../../assets/images/logo.png';
import imageBg from '../../assets/images/bg.jpg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signin = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { userSignIn } = useAuth();

    const handleToSign = async () => {
        const data = {
            email,
            password
        }
        
        const response = await userSignIn(data);
        const newLocal = 'error';
        if (response) {
            navigate('/dashboard');
            return;
        }

         alert('User Not Found');
    }
    return(
        <Wrapper>
            <Background image={imageBg}/>
            <Card width="400px" >
                <img src={imageLogo} width={172} height={61} alt="logo" />
                <InputContainer>
                    <Input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </InputContainer>

                <ButtonContainer>
                    <Button type="button" onClick={handleToSign}>Entrar</Button>
                    <p>Ainda não é cadastrado? <Link to="/signup">Clique aqui</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default Signin;