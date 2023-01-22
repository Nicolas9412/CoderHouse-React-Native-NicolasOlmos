import { URL_BASE } from "../../firebase/index";
import { ordersTypes } from "../types";

const { GET_ORDERS, DELETE_ORDER, SELECT_ORDER } = ordersTypes;

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/orders.json`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      const orders = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      }));

      dispatch({
        type: GET_ORDERS,
        orders,
      });
    } catch (error) {
      dispatch({
        type: GET_ORDERS,
        error,
      });
    }
  };
};

export const deleteOrder = (id) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${URL_BASE}/orders/${id}.json`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
  
        await response.json();

        dispatch({
          type: DELETE_ORDER,
          id,
        });
      } catch (error) {
        dispatch({
          type: DELETE_ORDER,
          error,
        });
      }
    };
  };

  export const selectedOrder = (id) => ({
    type: SELECT_ORDER,
    orderId: id,
  });