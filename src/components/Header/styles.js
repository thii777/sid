import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Header

export const Container = styled.header`
    height: 140px;
`;

export const FreeShipping = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 3px;
    height: 50px;
    background: #ff8c00;
    color: #fff;

    p {
        margin-top: 5px;
    }
`;

// Menu

export const Menu = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 3px;
    padding: 15px 55px 0 55px;

    .perfil-cart-container {
        display: flex;
    }
`;

export const TaskInput = styled.div`
    div {
        height: 40px;
        width: 600px;
        border: 1px solid #ddd;
        border-radius: 8px;
        display: flex;
        align-items: center;

        input {
            padding-left: 20px;
            border: none;
            width: 550px;
            height: 38px;
            border-radius: 8px 0 0 8px;
            ::placeholder {
                color: #999;
            }
        }
        button {
            padding-left: 10px;
            height: 38px;
            width: 48px;
            border: none;
            background: #fff;
            border-radius: 0 8px 8px 0;
        }
    }
`;

export const Perfil = styled(Link)`
    margin-right: 10px;
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;

    transition: opacity 0.2s;
    color: #999;

    &:hover {
        opacity: 0.7;
        color: green;
    }

    span {
        font-size: 11px;
    }
`;

// Navbar

export const NavBar = styled.header`
    @import url('https://fonts.googleapis.com/css?family=Fjalla+One&display=swap');

    display: flex;
    justify-content: space-between;
    align-items: center;

    list-style: none;
    text-transform: uppercase;
    padding: 15px 25px 0 25px;

    letter-spacing: 3px;
    font-size: 12px;
    font-family: Fjalla;
`;

// Article

export const StylesHeader = styled(Link)`
    text-decoration: none;
    color: #999;
    font-size: 12px;
    font-family: Fjalla Arial, Helvetica, sans-serif;

    &:hover {
        color: blue;
    }

    span {
        font-weight: bold;
        font-size: 12px;
        color: blue;
    }
`;
