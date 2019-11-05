import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
    PageProductList,
    Container,
} from '../../components/StylePageProducts/styles';

class ShoesPageProducts extends Component {
    handleAddProduct = id => {
        const { addToCartRequest } = this.props;

        addToCartRequest(id);
    };

    render() {
        const { pageProduct } = this.props;
        console.tron.log(pageProduct);

        return (
            <Container>
                {pageProduct.map(product => (
                    <PageProductList>
                        <div>
                            <h2>Galeria de fotos</h2>
                            <div>
                                <img src={product.image} alt={product.title} />
                                <img src={product.image1} alt={product.title} />
                                <img src={product.image2} alt={product.title} />
                                <img src={product.image3} alt={product.title} />
                                <img src={product.image4} alt={product.title} />
                                <img src={product.image5} alt={product.title} />
                            </div>
                        </div>
                        <div className="sider-nav">
                            <h3>{product.title}</h3>
                            <ul>
                                <li className="category">
                                    <span>{product.category}</span>
                                </li>
                                <li className="brand">
                                    <span>{product.brand}</span>
                                </li>
                                <li className="price">
                                    <span>{product.priceFormatted}</span>
                                </li>
                                <li className="color">
                                    <span>{product.color}</span>
                                </li>
                                <li className="size">
                                    <span>Tamanho: {product.size}</span>
                                </li>
                                <li className="code">
                                    <span>{product.code}</span>
                                </li>
                                <button
                                    type="button"
                                    onClick={() =>
                                        this.handleAddProduct(product.id)
                                    }
                                >
                                    Comprar
                                </button>
                                <button className="favorite" type="button">
                                    Adcionar a carrinho
                                </button>
                            </ul>

                            <div className="productDescription">
                                <h3>Detalhes do produto</h3>
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
                    </PageProductList>
                ))}
            </Container>
        );
    }
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
