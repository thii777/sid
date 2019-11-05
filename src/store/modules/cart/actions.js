// Page product

export function sendToPageDescriptionRequest(id) {
    return {
        type: '@page/SEND_REQUEST',
        id,
    };
}

export function sendToPageDescriptionSuccess(product) {
    return {
        type: '@page/SEND_SUCCESS',
        product,
    };
}

// Cart
export function addToCartRequest(id) {
    return {
        type: '@cart/ADD_REQUEST',
        id,
    };
}

export function addToCartSuccess(product) {
    return {
        type: '@cart/ADD_SUCCESS',
        product,
    };
}

export function removeFromCart(id) {
    return {
        type: '@cart/REMOVE',
        id,
    };
}

export function updateAmount(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT',
        id,
        amount,
    };
}
