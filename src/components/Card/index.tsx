import { CardContainer } from './styles';

interface cardProps{
    width?: string;
    children?: React.ReactNode;
    height?: string;
    noShadow?: boolean;
}

const Card = ({
    children,
    width = '100%',
    height = 'auto',
    noShadow=false
}:cardProps) => {
    return <CardContainer
        width={width}
        height={height}
        noShadow={noShadow}
    >
        {children}
    </CardContainer>
}

export default Card;