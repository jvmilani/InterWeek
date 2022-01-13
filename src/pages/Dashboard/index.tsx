import { useEffect, useState } from 'react';
import ButtonSend from '../../components/ButtonSend';
import HeaderComponent from '../../components/Header';
import Input from '../../components/Input';
import { GrLink, GrLinkNext } from "react-icons/gr";
import { InputArea, PixCode, SaldoDashboard, Side, UserScreen } from './styles';
import useAuth from '../../hooks/useAuth'

import {pay , request} from '../../services/resources/pix'
import Statement from './Statement';
 
const Dashboard = () => {

    const { user, getCurrentUser } = useAuth();
    const wallet = user?.wallet || 0;

    const [key, setKey] = useState('');
    const [generatedKey, setGeneratedKey] = useState('');
    const [newValue, setNewValue] = useState('');
    
    const handleNewPayment = async () => {
        const { data } = await request(Number(newValue));
        
        if (data.copyPasteKey) {
            setGeneratedKey(data.copyPasteKey);
        }
    }

    const handlePayPix = async () => {
        try {
            const { data } = await pay(key);

            console.log(data);

            if (data.mag) {
                alert(data.mag);
                return;
            }
            alert('Error!');
        } catch (e) {
            console.log(e);
            alert('User Error!');
        }
    }

    useEffect(() => {
        getCurrentUser()
    }, [])

    if (!user) {
        return null;
    }

    return (
        <>
            <HeaderComponent />
            <UserScreen>
                <Side>
                <SaldoDashboard>
                    <h2>Saldo em conta:</h2>
                    <h3>{wallet.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h3>
                </SaldoDashboard>
                <InputArea>
                    <Input type="text" value={newValue} onChange={e => setNewValue(e.target.value)} placeholder="Pix Code"/>
                        <ButtonSend onClick={handleNewPayment} type="button" value="Send"> <GrLink/> Gerar</ButtonSend>
                </InputArea>
                    {generatedKey && (
                    <PixCode>
                    <p><strong>Pix Code is:</strong></p>
                    <p>{generatedKey}</p>
                    </PixCode>

                )}
                <InputArea>
                    <Input type="text" value={key} onChange={e => setKey(e.target.value)} placeholder="Send Pix" />
                    <ButtonSend onClick={handlePayPix} type="button" value="Send"><GrLinkNext/> Enviar</ButtonSend>
                    </InputArea>
                </Side>
                <Side>
                    <h2><GrLinkNext/> Extract</h2>
                    <Statement/>
                </Side>
            </UserScreen>

        </>
    )
}

export default Dashboard;