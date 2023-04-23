import { Botaopedido } from '../Botaopedido';
import { Input } from '../Input';
import {Container } from './style';
import { FaSignOutAlt } from 'react-icons/fa';
export function Header() {
    return (
        <Container>
            <img src="../../../public/lg.svg" alt="" />
            <Input></Input>
            <Botaopedido></Botaopedido>
            <FaSignOutAlt></FaSignOutAlt>
        </Container>
    )
}