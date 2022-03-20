import items from './../../products.json';

const initState = {
    items: [items],
    addedItems: [],
    total: 0
}

const CartReducer= (state = initState, action) => {

    return state;
}

export default CartReducer;
