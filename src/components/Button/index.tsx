import {InputHTMLAttributes} from 'react';
import { ButtonContainer } from './styles';

const Button = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <ButtonContainer {...props}>
            {props.children}
        </ButtonContainer>
    )
}

export default Button;