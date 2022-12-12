import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { categoryReducer, productsReducer, cartReducer, ordersReducer } from "./reducers";

const rootReducers = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: ordersReducer
});

export default createStore(rootReducers, applyMiddleware(thunk));
