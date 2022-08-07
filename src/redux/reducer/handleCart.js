const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case ADDITEM:
            // check if product is already exist
            const exist = state.find(x => x.id === product.id);
            if (exist) {
                // increase the quantity
                return state.map(x => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            }

            break;

        default:
            break;
    }
}