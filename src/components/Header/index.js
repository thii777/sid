import React from 'react';

import { Link } from 'react-router-dom';

import { MdSearch, MdPerson } from 'react-icons/md';

import { Container, Cart, Sac, Attendance, Help } from './styles';
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <Container>
            <Sac>
                <Attendance to="/attendance">
                    <strong>atendimento &nbsp; -</strong>
                </Attendance>
                <Help to="/help">
                    <strong> &nbsp; ajuda</strong>
                </Help>
            </Sac>
            <Link to="/">
                <img src={logo} alt="Sidsurf" />
            </Link>
            <Cart to="/cart">
                <MdSearch size={25} color="#000" />
                <MdPerson size={25} color="#000" />
                <div>
                    <strong>carrinho &nbsp; - &nbsp; </strong>
                    <strong>0&nbsp;itens</strong>
                </div>
            </Cart>
        </Container>
    );
}
