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
    padding: 0 55px 0 55px;

    img {
        margin-top: 30px;
        padding-left: 50px;
    }
`;

export const Sac = styled.div`
    display: flex;
    text-transform: uppercase;
`;

export const Attendance = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 11px;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
        color: blue;
    }
`;

export const Help = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 11px;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
        color: red;
    }
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;

    div {
        transition: opacity 0.2s;
        color: #000;
        margin-left: 11px;

        &:hover {
            opacity: 0.7;
            color: green;
        }

        span {
            font-size: 11px;
        }
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

export const Shoes = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 10px;

    &:hover {
        color: blue;
    }
`;
