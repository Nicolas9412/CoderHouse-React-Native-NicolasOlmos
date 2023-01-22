import { FOODS } from "../../data";
import { productsTypes } from "../types";

const { SELECT_PRODUCT, FILTER_PRODUCTS } = productsTypes;

const initialState = {
  products: FOODS,
  filteredProducts: [],
  selected: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      const selected = state.products.find(
        (product) => product.id === action.productId
      );
      return {
        ...state,
        selected,
      };
    case FILTER_PRODUCTS:
      const filteredProducts = state.products.filter(
        (product) => product.category === action.categoryId
      );
      return { ...state, filteredProducts };
    default:
      return state;
  }
};

export default productsReducer;
