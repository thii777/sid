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
                <StylesHeader to="/promotion">
                    <li>
                        <span>Promoções</span>
                    </li>
                </StylesHeader>
                <StylesHeader to="/shoes">
                    <li>Tenis</li>
                </StylesHeader>
                <StylesHeader to="/tshirts">
                    <li>Camisetas</li>
                </StylesHeader>
                <StylesHeader to="/shorts">
                    <li>Bermudas</li>
                </StylesHeader>
                <StylesHeader to="/pants">
                    <li>Calças</li>
                </StylesHeader>
                <StylesHeader to="/clock">
                    <li>Chinelos</li>
                </StylesHeader>
                <StylesHeader to="/sockets">
                    <li>Cuecas e meias</li>
                </StylesHeader>
                <StylesHeader to="/accessories">
                    <li>
                        Acessórios
                        <div className="sub-menu">
                            <ul>
                                <li>
                                    <a href="#">Relogios</a>
                                </li>
                                <li>
                                    <a href="#">Oculos</a>
                                </li>
                                <li>
                                    <a href="#">Bonés</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </StylesHeader>
            </NavBar>
        </Container>
    );
}

export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);
