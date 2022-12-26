import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  categoryReducer,
  productsReducer,
  cartReducer,
  ordersReducer,
  authReducer,
} from "./reducers";

const rootReducers = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
});

export default createStore(rootReducers, applyMiddleware(thunk));
