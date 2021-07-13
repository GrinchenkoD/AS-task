import { createAction } from "@reduxjs/toolkit";

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
};
