import { createReducer } from "@reduxjs/toolkit";
import { addToProductSuccess, loadProductSuccess } from "./products-actions";
import {
  addToFavoriteSuccess,
  deleteFromFavoriteSuccess,
} from "../favorite/favorite-actions";

const initialState = [];

const productsReducer = createReducer(initialState, {
  [addToProductSuccess]: (state, { payload }) => [...state, payload],
  [loadProductSuccess]: (_, { payload }) => {
    return payload.products;
  },
  // [addToFavoriteSuccess]: (state, { payload }) => {
  //   const favoriteProduct = state.find((product) => product.id === payload.id);
  //   console.log(payload);
  //   favoriteProduct.favorite = true;
  //   console.log(favoriteProduct);
  //   console.log(...state.filter((product) => product.id !== payload.id));
  //   return [
  //     ...state.filter((product) => product.id !== payload.id),
  //     favoriteProduct,
  //   ];
  // },
});

export default productsReducer;
