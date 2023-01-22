import { ordersTypes } from "../types";

const { GET_ORDERS, DELETE_ORDER, SELECT_ORDER} = ordersTypes;

const initialState = {
  list: [],
  selected: null
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ORDER:
      const selected = state.list.find(
        (order) => order.id === action.orderId
      );
      return {
        ...state,
        selected,
      };
    case GET_ORDERS:
      return { ...state, list: action.orders };
    case DELETE_ORDER:
      return {
        ...state,
        list: state.list.filter((order) => order.id !== action.id),
      };
    default:
      return state;
  }
};

export default ordersReducer;
