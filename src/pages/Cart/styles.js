import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    padding: 20px;
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    max-width: 95%;
    margin: 30px 0 0 35px;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: #093f79;
            color: #fff;
            border-radius: 4px;
            border: none;
            padding: 12px 20px;
            font-weight: bold;
            text-transform: uppercase;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#093f79')};
            }
        }
    }
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #999;
        text-align: left;
        text-transform: uppercase;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #d6d6d6;

        button {
            background: none;
            border: 0;
            padding: 6px;
        }
    }

    img {
        height: 100%;
        padding-bottom: 15px;
    }

    strong {
        color: #333;
        display: block;
    }
    span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }
    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #d6d6d6;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
        button {
            background: none;
            border: 0;
            padding: 6px;
        }
    }
`;

export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
        font-weight: bold;
    }

    strong {
        font-size: 22px;
        margin-left: 5px;
    }
`;
