import { createReducer } from "@reduxjs/toolkit";
import {
  addToFavoriteSuccess,
  deleteFromFavoriteSuccess,
  loadFavoriteSuccess,
} from "./favorite-actions";

const initialState = [];

const favoriteReducer = createReducer(initialState, {
  [loadFavoriteSuccess]: (_, { payload }) => {
    return payload;
  },
  [addToFavoriteSuccess]: (state, { payload }) => {
    // localStorage.setItem("favorites", [payload, ...state]);

    return [payload, ...state];
  },
  [deleteFromFavoriteSuccess]: (state, { payload }) => {
    const result = state.filter((product) => product.id !== payload.id);
    localStorage.setItem("favorites", JSON.stringify(result));

    return result;
  },
});

export default favoriteReducer;
