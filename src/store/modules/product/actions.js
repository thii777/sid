export function sendToPageRequest(id) {
    return {
        type: '@page/SEND_REQUEST',
        id,
    };
}

export function sendToPageSuccess(product) {
    return {
        type: '@page/SEND_SUCCESS',
        product,
    };
}
