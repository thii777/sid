import styled from 'styled-components';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    list-style: none;
    margin: 60px 25px 20px 25px;

    form {
        display: flex;
        flex-direction: column;

        label#images {
            max-width: 200px;
            margin-bottom: 20px;
            border: 1px dashed #ddd;
            background-size: cover;
            cursor: pointer;

            display: flex;
            height: 200px;
            justify-content: center;
            align-items: center;
        }

        label#images input {
            display: none;
        }

        img {
            max-width: 200px;
        }

        input {
            max-width: 200px;
        }

        button {
            margin-top: 5px;
            max-width: 200px;
        }
    }
`;
