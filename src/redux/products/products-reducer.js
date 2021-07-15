import { createReducer } from '@reduxjs/toolkit';
import { addToProductSuccess, loadProductSuccess } from './products-actions';
import {
  addToFavoriteSuccess,
  deleteFromFavoriteSuccess,
} from '../favorite/favorite-actions';

const initialState = [];

const productsReducer = createReducer(initialState, {
  [addToProductSuccess]: (state, { payload }) => [...state, payload],
  [loadProductSuccess]: (_, { payload }) => payload.products,
  [addToFavoriteSuccess]: (state, { payload }) => {
    const favoriteProduct = state.find(product => product.id === payload.id);
    const result = { ...favoriteProduct, favorite: true };
    return [...state.filter(product => product.id !== payload.id), result];
  },
  [deleteFromFavoriteSuccess]: (state, { payload }) => {
    const favoriteProduct = state.find(product => product.id === payload.id);
    const result = { ...favoriteProduct, favorite: false };
    return [...state.filter(product => product.id !== payload.id), result];
  },
});

export default productsReducer;
