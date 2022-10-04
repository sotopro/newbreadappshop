import { products } from '../../constants/data/products';

const initialState = {
    products: products,
    filteredProducts: [],
    selected: null
}

const productReducer = (state = initialState, action) => {
    return state;
}

export default productReducer;