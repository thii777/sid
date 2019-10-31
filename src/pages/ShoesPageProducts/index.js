import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
    PageProductList,
    Container,
} from '../../components/StylePageProducts/styles';

function ShoesPageProducts({ pageProduct }) {
    return (
        <Container>
            <PageProductList>
                {pageProduct.map(product => (
                    <div>
                        <div>
                            <h2>Galeria de fotos</h2>
                            <div>
                                <img src={product.image} alt={product.title} />
                                <img src={product.image1} alt={product.title} />
                                <img src={product.image2} alt={product.title} />
                                <img src={product.image3} alt={product.title} />
                            </div>
                        </div>
                        <div className="sider-nav">
                            <h3>{product.title}</h3>
                            <ul>
                                <li className="category">
                                    <span>Categoria:</span> Calçado
                                </li>
                                <li className="brand">
                                    <span>Marca:</span> Nike
                                </li>
                                <li className="price">
                                    <span>Oferta:</span>
                                </li>
                                <li className="color">
                                    <span>Cor:</span> Branco
                                </li>
                                <li className="size">
                                    <span>Tamanho:</span> 39/40
                                </li>
                                <li className="code">
                                    <span>Codigo do produto:</span> 41625
                                </li>
                                <button type="button">
                                    Adicionar ao carrinho
                                </button>
                                <button className="favorite" type="button">
                                    Adcionar aos favoritos
                                </button>
                            </ul>

                            <div className="productDescription">
                                <h3>{product.title}</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </PageProductList>
        </Container>
    );
}

const mapStateToProps = state => ({
    pageProduct: state.cart.map(product => ({
        ...product,
        subTotal: formatPrice(product.price),
    })),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoesPageProducts);
