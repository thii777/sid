import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Header

export const Container = styled.header`
    height: 140px;
`;

// Menu

export const Menu = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 3px;
    padding: 25px 55px 0 55px;

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
    color: #000;

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
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 3px;
    list-style: none;
    font-size: 13px;
    text-transform: uppercase;
    padding: 40px 25px 0 25px;
`;

// Article

export const StylesHeader = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 10px;

    &:hover {
        color: blue;
    }

    span {
        font-weight: bold;
        font-size: 12px;
        color: blue;
    }
`;
