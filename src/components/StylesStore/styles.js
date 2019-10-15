import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    list-style: none;
    margin: 0px 25px 0 25px;

    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        /* border: 1px solid #d6d6d6; */
        border-radius: 4px;
        padding: 20px;

        img {
            align-self: center;
            max-width: 250px;
        }

        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
        }

        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        button {
            background: #093f79;
            color: #fff;
            border-radius: 4px;
            border: none;
            overflow: hidden;
            margin-top: auto;
            display: flex;
            align-items: center;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#093f79')};
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
