import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    margin: 100px 50px 0;
    height: 100%;
`;

export const PageProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 15px;

    h2 {
        margin-left: 15px;
        width: 880px;
        color: #212121;
    }

    img {
        max-width: 400px;
        width: 100%;
        margin: 15px;
        cursor: pointer;
    }

    .sider-nav {
        h3 {
            color: #212121;
            margin-top: 40px;
        }
        ul {
            margin-top: 15px;

            li {
                list-style: none;
                margin-bottom: 15px;
                color: #777777;
            }
        }
        button {
            margin-top: 15px;
            width: 250px;
            height: 30px;
            background: #ff8c00;
            color: #fff;
            border-radius: 4px;
            border: none;
            overflow: hidden;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#ff8c00')};
            }
        }

        button.favorite {
            margin: 0 15px 0 0;
            background: none;
            border: 1px solid #ff8c00;
            color: #ff8c00;
            margin-top: 5px;

            &:hover {
                background: #ff8c00;
                color: #fff;
                border: 1px solid #ff8c00;
                font-weight: bold;
            }
        }
        .productDescription {
            margin-top: 15px;
            border-top: 1px solid #d6d6d6;

            h3 {
                color: #212121;
                margin-top: 15px;
            }
            p {
                padding-top: 15px;
                color: #777777;
            }
        }
    }
`;
