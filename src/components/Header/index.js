import React from 'react';

import { Link } from 'react-router-dom';

import { MdSearch, MdPermIdentity } from 'react-icons/md';

import {
    Container,
    NavBar,
    Menu,
    Cart,
    Sac,
    Attendance,
    Help,
    Shoes,
} from './styles';

import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <Container>
            <Menu>
                <Sac>
                    <Attendance to="/attendance">
                        <span>atendimento &nbsp; -</span>
                    </Attendance>
                    <Help to="/help">
                        <span> &nbsp; ajuda</span>
                    </Help>
                </Sac>
                <Link to="/">
                    <img src={logo} alt="Sidsurf" />
                </Link>
                <Cart to="/cart">
                    <MdSearch size={25} color="#000" />
                    <MdPermIdentity size={25} color="#000" />
                    <div>
                        <span>carrinho &nbsp; - &nbsp; </span>
                        <span>0&nbsp;itens</span>
                    </div>
                </Cart>
            </Menu>
            <NavBar>
                <Shoes to="/shoes">
                    <li>Tenis</li>
                </Shoes>
                <li>Camisetas</li>
                <li>Bermudas</li>
                <li>Bones</li>
                <li>Relogios</li>
                <li>Cuecas e meias</li>
                <li>Acessorios</li>
                <li>
                    <span>Promoções</span>
                </li>
            </NavBar>
        </Container>
    );
}
