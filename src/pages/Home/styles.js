import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    h1 {
        display: flex;
        justify-content: center;
        padding-top: 50px;
        color: #000;
        text-decoration: none;
    }
`;

export const Sneakers = styled(Link)`
    text-decoration: none;
`;
