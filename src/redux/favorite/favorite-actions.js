import { createAction } from "@reduxjs/toolkit";
//load

const loadFavoriteRequest = createAction("favorite/loadFavoriteRequest");
const loadFavoriteSuccess = createAction("favorite/loadFavoriteSuccess");
const loadFavoriteError = createAction("favorite/loadFavoriteError");

// add
const addToFavoriteRequest = createAction("favorite/addToFavoriteRequest");
const addToFavoriteSuccess = createAction("favorite/addToFavoriteSuccess");
const addToFavoriteError = createAction("favorite/addToFavoriteError");

// delete
const deleteFromFavoriteRequest = createAction(
  "favorite/deleteFromFavoriteError"
);
const deleteFromFavoriteSuccess = createAction(
  "favorite/deleteFromFavoriteSuccess"
);
const deleteFromFavoriteError = createAction(
  "favorite/deleteFromFavoriteError"
);

export {
  addToFavoriteRequest,
  addToFavoriteSuccess,
  addToFavoriteError,
  deleteFromFavoriteRequest,
  deleteFromFavoriteSuccess,
  deleteFromFavoriteError,
  loadFavoriteRequest,
  loadFavoriteSuccess,
  loadFavoriteError,
};
