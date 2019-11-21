import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    list-style: none;
    margin: 70px 25px 20px 25px;

    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        /* border: 1px solid #d6d6d6;
        border-radius: 4px; */
        padding: 20px;

        img {
            align-self: left;
            max-width: 250px;
        }

        .name-id {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;

            > strong {
                font-size: 14px;
                line-height: 20px;
                color: #333;
            }

            p {
                font-size: 13px;
                padding-right: 25px;
                color: #999;
            }
        }

        > span {
            font-size: 17px;
            font-weight: bold;
            margin: 5px 0 10px;
        }

        button {
            width: 250px;
            height: 40px;
            background: #ff8c00;
            color: #fff;
            border-radius: 4px;
            border: none;
            overflow: hidden;
            margin-top: auto;
            display: flex;
            align-items: center;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#ff8c00')};
            }

            div {
                display: flex;
                align-items: center;
                padding: 12px;
                background: rgba(0, 0, 0, 0.1);
            }

            svg {
                margin-right: 5px;
            }

            span {
                flex: 1px;
                text-align: center;
                font-weight: bold;
            }
        }
    }
`;
