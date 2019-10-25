import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../../util/format';
import api from '../../../services/api';
import { ProductList } from '../../../components/StylesStore/styles';
import * as CartActions from '../../../store/modules/cart/actions';

class Shorts extends Component {
    state = {
        productsShorts: [],
    };

    async componentDidMount() {
        const response = await api.get('productsShorts');

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({ productsShorts: data });
    }

    handleAddProduct = id => {
        const { addToCartRequest } = this.props;

        addToCartRequest(id);
    };

    render() {
        const { productsShorts } = this.state;
        const { amount } = this.props;

        return (
            <ProductList>
                {productsShorts.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>
                        <button
                            type="button"
                            onClick={() => this.handleAddProduct(product.id)}
                        >
                            <div>
                                <MdAddShoppingCart size={16} color="#fff" />{' '}
                                {amount[product.id] || 0}
                            </div>
                            <span>adicionar ao carrinho</span>
                        </button>
                    </li>
                ))}
            </ProductList>
        );
    }
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;

        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shorts);
