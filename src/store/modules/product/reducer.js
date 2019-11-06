import produce from 'immer';

export default function Product(state = [], action) {
    switch (action.type) {
        case '@page/SEND_SUCCESS':
            return produce(state, draft => {
                const { product } = action;
                draft.push(product);
            });

        default:
            return state;
    }
}
