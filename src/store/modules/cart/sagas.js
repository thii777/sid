import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

import {
    sendToPageDescriptionSuccess,
    addToCartSuccess,
    updateAmount,
} from './actions';

function* sendToPageDescription({ id }) {
    const response = yield call(api.get, `/productsShoes/${id}`);

    const data = {
        ...response.data,
        amount: 1,
        priceFormatted: formatPrice(response.data.price),
    };

    yield put(sendToPageDescriptionSuccess(data));
    history.push('/shoespageproducts');
}

function* addToCart({ id }) {
    const productExists = yield select(state =>
        state.cart.find(p => p.id !== id)
    );

    const stock = yield call(api.get, `/stockShoes/${id}`);

    const stockAmount = stock.data.amount;

    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        toast.error('Quantidade solicitada sem estoque');
        return;
    }

    if (productExists) {
        yield put(updateAmount(id, amount));
    } else {
        const response = yield call(api.get, `/productsShoes/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };

        yield put(addToCartSuccess(data));
        history.push('/cart');
    }
}

export default all([
    takeLatest('@page/SEND_REQUEST', sendToPageDescription),
    takeLatest('@cart/ADD_REQUEST', addToCart),
]);
