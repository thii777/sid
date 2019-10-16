import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { MdPermIdentity, MdSearch } from 'react-icons/md';

import {
    Container,
    NavBar,
    Menu,
    Cart,
    StylesHeader,
    TaskInput,
} from './styles';

import logo from '../../assets/logo.png';

function Header({ cartSize }) {
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
                        <span>{cartSize}&nbsp;itens</span>
                    </div>
                </Cart>
            </Menu>
            <NavBar>
                <StylesHeader to="/shoes">
                    <li>Tenis</li>
                </StylesHeader>
                <StylesHeader to="/t-shirt">
                    <li>Camisetas</li>
                </StylesHeader>
                <StylesHeader to="/short">
                    <li>Shorts</li>
                </StylesHeader>
                <StylesHeader to="/hat">
                    <li>Bones</li>
                </StylesHeader>
                <StylesHeader to="/clock">
                    <li>Relogios</li>
                </StylesHeader>
                <StylesHeader to="/sockets">
                    <li>Cuecas e meias</li>
                </StylesHeader>
                <StylesHeader to="/accessories">
                    <li>Acessorios</li>
                </StylesHeader>
                <StylesHeader to="/promotion">
                    <li>
                        <span>Promoções</span>
                    </li>
                </StylesHeader>
            </NavBar>
        </Container>
    );
}

export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);
