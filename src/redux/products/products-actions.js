import { createAction } from "@reduxjs/toolkit";

// add
const addToProductRequest = createAction("product/addToProductRequest");
const addToProductSuccess = createAction("product/addToProductSuccess");
const addToProductError = createAction("product/addToProductError");

// load
const loadProductRequest = createAction("product/loadProductRequest");
const loadProductSuccess = createAction("product/loadProductSuccess");
const loadProductError = createAction("product/loadProductError");

export {
  addToProductRequest,
  addToProductError,
  addToProductSuccess,
  loadProductRequest,
  loadProductSuccess,
  loadProductError,
};
