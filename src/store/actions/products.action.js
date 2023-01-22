import { productsTypes } from "../types";

const { SELECT_PRODUCT, FILTER_PRODUCTS } = productsTypes;

export const selectedProduct = (id) => ({
  type: SELECT_PRODUCT,
  productId: id,
});

export const filterProducts = (id) => ({
  type: FILTER_PRODUCTS,
  categoryId: id,
});
