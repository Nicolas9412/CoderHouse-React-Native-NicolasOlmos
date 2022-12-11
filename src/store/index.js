import { createStore, combineReducers } from "redux";

import { categoryReducer, productsReducer } from "./reducers";

const rootReducers = combineReducers({
  products: productsReducer,
  category: categoryReducer,
});

export default createStore(rootReducers);
