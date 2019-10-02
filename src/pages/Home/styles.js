import styled from 'styled-components';
import bunner from '../../assets/bunner.jpg';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Fjalla+One&display=swap');
    .bunner {
        background: url(${bunner}) no-repeat center;
        height: 379px;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .advantage {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 110px;
        padding-top: 20px;
    }
    .post {
        display: flex;
        div {
            margin-left: 10px;
            h2 {
                text-transform: uppercase;
                font-size: 18px;
                font-family: Fjalla one;
                p {
                    font-size: 10px;
                }
            }
        }
    }
    .pay {
        display: flex;
        div {
            margin-left: 0;
            h2 {
                text-transform: uppercase;
                font-size: 18px;
                font-family: Fjalla one;
                p {
                    font-size: 10px;
                }
            }
        }
    }
    .physical-store {
        display: flex;
        div {
            margin-left: 10px;
            h2 {
                text-transform: uppercase;
                font-size: 18px;
                font-family: Fjalla one;
                p {
                    font-size: 10px;
                }
            }
        }
    }
    .exchange {
        display: flex;
        div {
            margin-left: 10px;
            h2 {
                text-transform: uppercase;
                font-size: 18px;
                font-family: Fjalla one;
                p {
                    font-size: 10px;
                }
            }
        }
    }
`;
