import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatPrice } from '../../util/format';
import api from '../../services/api';
import { ProductList } from '../../components/StylesStore/styles';
// import * as CartActions from '../../store/modules/cart/actions';
import * as PageActions from '../../store/modules/product/actions';

class Shoes extends Component {
    state = {
        productsShoes: [],
    };

    async componentDidMount() {
        const response = await api.get('productsShoes');

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({ productsShoes: data });
    }

    handleAddProduct = id => {
        const { sendToPageRequest } = this.props;

        sendToPageRequest(id);
    };

    render() {
        const { productsShoes } = this.state;
        // const { amount } = this.props;

        return (
            <ProductList>
                {productsShoes.map(product => (
                    <li key={product.id}>
                        <img
                            onClick={() => this.handleAddProduct(product.id)}
                            src={product.image}
                            alt={product.title}
                        />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>
                        <button
                            type="button"
                            onClick={() => this.handleAddProduct(product.id)}
                        >
                            <span>Ver detalhes do produto</span>
                        </button>
                    </li>
                ))}
            </ProductList>
        );
    }
}

const mapStateToProps = state => ({
    amount: state.product.reduce((amount, product) => {
        amount[product.id] = product.amount;

        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(PageActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shoes);
