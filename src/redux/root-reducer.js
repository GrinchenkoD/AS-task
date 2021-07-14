// import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
// import storage from "redux-persist/lib/storage";

import favoriteReducer from "./favorite/favorite-reducer";
import productsReducer from "./products/products-reducer";

// const authPersistConfig = {
//   key: "favorite-products",
//   storage,
//   whitelist: ["favorite"],
// };
const reducer = combineReducers({
  // favorite: persistReducer(authPersistConfig, favoriteReducer),
  favorite: favoriteReducer,
  products: productsReducer,
});

export default reducer;
