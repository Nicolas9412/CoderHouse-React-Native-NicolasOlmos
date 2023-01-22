import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  categoryReducer,
  productsReducer,
  cartReducer,
  ordersReducer,
  authReducer,
  PlaceReducer
} from "./reducers";

const rootReducers = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
  place: PlaceReducer,
});

export default createStore(rootReducers, applyMiddleware(thunk));
