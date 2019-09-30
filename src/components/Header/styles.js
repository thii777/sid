import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 3px;

    img {
        margin-top: 40px;
    }
`;

export const Sac = styled.div`
    display: flex;
    text-transform: uppercase;
`;

export const Attendance = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 10px;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
        color: blue;
    }
`;

export const Help = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 10px;
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
        margin-left: 10px;

        &:hover {
            opacity: 0.7;
            color: green;
        }
        strong {
            font-size: 10px;
        }

        span {
            font-size: 10px;
        }
    }
`;
