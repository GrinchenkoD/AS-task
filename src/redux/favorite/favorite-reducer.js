import { createReducer } from "@reduxjs/toolkit";
import {
  addToFavoriteSuccess,
  deleteFromFavoriteSuccess,
} from "./favorite-actions";

const initialState = [];

const favoriteReducer = createReducer([], {
  [addToFavoriteSuccess]: (state, { payload }) => {
    return [payload, ...state];
  },
  [deleteFromFavoriteSuccess]: (state, { payload }) =>
    state.filter((product) => product.id !== payload.id),
});

export default favoriteReducer;
