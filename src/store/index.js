import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productsReducer, categoryReducer } from "./reducers";

const rootReducer = combineReducers({
    products: productsReducer,
    category: categoryReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));