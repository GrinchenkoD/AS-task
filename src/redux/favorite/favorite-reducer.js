import { createReducer } from "@reduxjs/toolkit";
import {
  addToFavoriteSuccess,
  deleteFromFavoriteSuccess,
} from "./favorite-actions";

const initialState = [];

const favoriteReducer = createReducer(initialState, {
  [addToFavoriteSuccess]: (state, { payload }) => [...state, payload],
  [deleteFromFavoriteSuccess]: (state, { payload }) =>
    state.filter((product) => product.id !== payload.id),
});

export default favoriteReducer;
