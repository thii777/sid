import React from 'react';

import { Link } from 'react-router-dom';

import { MdPermIdentity, MdSearch } from 'react-icons/md';

import {
    Container,
    NavBar,
    Menu,
    Cart,
    Shoes,
    Tshirt,
    Short,
    Hat,
    Clock,
    TaskInput,
} from './styles';

import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <Container>
            <Menu>
                <Link to="/">
                    <img src={logo} alt="Sidsurf" />
                </Link>
                <TaskInput>
                    <div>
                        <input type="text" placeholder="Produtos" />
                        <button type="submit">
                            <MdSearch size={25} color="#999" />
                        </button>
                    </div>
                </TaskInput>
                <Cart to="/cart">
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
                <Tshirt to="/t-shirt">
                    <li>Camisetas</li>
                </Tshirt>
                <Short to="/short">
                    <li>Shorts</li>
                </Short>
                <Hat to="/hat">
                    <li>Bones</li>
                </Hat>
                <Clock to="/clock">
                    <li>Relogios</li>
                </Clock>
                <li>Cuecas e meias</li>
                <li>Acessorios</li>
                <li>
                    <span>Promoções</span>
                </li>
            </NavBar>
        </Container>
    );
}
