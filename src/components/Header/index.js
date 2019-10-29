import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { MdPermIdentity, MdSearch } from 'react-icons/md';

import {
    Container,
    NavBar,
    Menu,
    Perfil,
    Cart,
    StylesHeader,
    TaskInput,
    FreeShipping,
} from './styles';

import logo from '../../assets/logo.png';

function Header({ cartSize }) {
    return (
        <Container>
            <FreeShipping>
                <strong>Frete grátis na primeira compra</strong>
                <p>Valido nos fretes até R$ 25</p>
            </FreeShipping>
            <Menu>
                <Link to="/">
                    <img src={logo} alt="Sidsurf" width={200} />
                </Link>
                <TaskInput>
                    <div>
                        <input type="text" placeholder="O que você procura?" />
                        <button type="submit">
                            <MdSearch size={25} color="#999" />
                        </button>
                    </div>
                </TaskInput>
                <div className="perfil-cart-container">
                    <Perfil>
                        <MdPermIdentity size={25} color="#000" />
                    </Perfil>
                    <Cart to="/cart">
                        <span>carrinho&nbsp;-&nbsp;</span>
                        <span>{cartSize}&nbsp;itens</span>
                    </Cart>
                </div>
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
