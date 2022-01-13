import {InputHTMLAttributes} from 'react';
import { ButtonUser } from './styles';


const ButtonSend = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <ButtonUser {...props}>
            {props.children}
        </ButtonUser>
    )
}

export default ButtonSend;