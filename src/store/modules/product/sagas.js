import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

import { sendToPageSuccess } from './actions';

function* sendToPage({ id }) {
    const response = yield call(api.get, `/productsShoes/${id}`);

    const data = {
        ...response.data,
        priceFormatted: formatPrice(response.data.price),
    };

    yield put(sendToPageSuccess(data));
    history.push('/shoespageproducts');
}

export default all([takeLatest('@page/SEND_REQUEST', sendToPage)]);
