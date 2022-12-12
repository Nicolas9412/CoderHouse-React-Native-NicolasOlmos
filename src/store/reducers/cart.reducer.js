import { cartTypes } from "../types";
import { sumTotal } from "../../utils";
const { ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER } = cartTypes;

const initialState = {
  items: [],
  total: 0,
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let updateCart = [];
      if (state.items.find((item) => item.id === action.item.id)) {
        updateCart = state.items.map((item) => {
          if (item.id === action.item.id) item.quantity += 1;
          return item;
        });
      } else {
        const item = { ...action.item, quantity: 1 };
        updateCart = [...state.items, item];
      }
      return { ...state, items: updateCart, total: sumTotal(updateCart) };
    case REMOVE_FROM_CART:
      updateCart = state.items.filter((item) => item.id !== action.id);
      return { ...state, items: updateCart, total: sumTotal(updateCart) };
    case CONFIRM_ORDER:
      return { ...state, items: [], total: 0 };

    default:
      return state;
  }
};

export default cartReducer;
