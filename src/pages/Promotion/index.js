import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatPrice } from '../../util/format';
import api from '../../services/api';
import { ProductList } from '../../components/StylesStore/styles';
import * as PageActions from '../../store/modules/product/actions';

class Promotion extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        // const response = await api.get(`${category}`);
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
                <>
                    {products.map(product => (
                        <li key={product.id}>
                            <img
                                onClick={() =>
                                    this.handleAddProduct(product.id)
                                }
                                src={product.url}
                                alt={product.name}
                            />
                            <div className="name-id">
                                <strong>{product.name}</strong>
                                <p>ID: {product.id}</p>
                            </div>
                            {/* <strong>{product.name}</strong> */}
                            <span>{product.priceFormatted}</span>
                            <button
                                type="button"
                                onClick={() =>
                                    this.handleAddProduct(product.id)
                                }
                            >
                                <span>Ver detalhes do produto</span>
                            </button>
                        </li>
                    ))}
                    <Link to="/shoesnew">
                        <button className="btn">Cadastra produto</button>
                    </Link>
                </>
            </ProductList>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product.reduce(product => {
        product.id = product;

        return product;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(PageActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Promotion);
