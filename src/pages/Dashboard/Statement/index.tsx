import { StatementItemContainer, StatementItemImage, StatementItemInfo, Value } from './styles'
import { FiDollarSign } from 'react-icons/fi';
import { format } from 'date-fns';
import {transactions} from '../../../services/resources/pix'
import { useEffect, useState } from 'react';
import { Side } from '../styles';
interface StatementItem{
    user: {
        firstname: string,
        lastName: string
    },
    value: number,
    type: 'paid' | 'received',
    updatedAt: Date
}

const StatementItem = ({ user, value, type, updatedAt }: StatementItem) => {
    return (
        <StatementItemContainer>
            <StatementItemImage type={type}>
                <FiDollarSign size={24} />
            </StatementItemImage>
            <StatementItemInfo>
                <Value type={type}>{type === 'paid' ? '-' : ''}{value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Value>
                <p>{type === 'paid' ? 'Pago à ' : 'Recebido de '}<strong>{user.firstname} {user.lastName}</strong></p>
                <p>{format(new Date(updatedAt), "dd/MM/yyyy 'às' HH:mm:'h'")}</p>
            </StatementItemInfo>
        </StatementItemContainer>
    )
}

const Statement = () => {
    const [statements, setStatements] = useState<StatementItem[]>([]);
    
    const getAllTransactions = async () => {
        const { data } = await transactions();
        setStatements(data.transactions);
    }

    useEffect(() => {
        getAllTransactions();
    }, [])

    return (
        <Side>
            {statements.length > 0 && statements.map(statement => <StatementItem {...statement} />)}
        </Side>
    )
}

export default Statement;