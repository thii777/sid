import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatPrice } from '../../util/format';
import api from '../../services/api';
import { ProductList } from '../../components/StylesStore/styles';
import * as PageActions from '../../store/modules/product/actions';

class Shoes extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('/products');

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({ products: data });
    }

    handleAddProduct = id => {
        const { sendToPageRequest } = this.props;

        sendToPageRequest(id);
    };

    render() {
        const { products } = this.state;
        // const { amount } = this.props;

        return (
            <ProductList>
                {products.map(product => (
                    <li key={product.id}>
                        <img
                            // onClick={() => this.handleAddProduct(product.id)}
                            src={product.images.url}
                            alt={product.product_name}
                        />
                        <strong>{product.product_name}</strong>
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
