import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

//! import products from "./date/dateReducer"; ================================
import favoriteReducer from "./favorite/favorite-reducer";

const authPersistConfig = {
  key: "favorite-products",
  storage,
  whitelist: ["favorite"],
};
const reducer = combineReducers({
  favorite: persistReducer(authPersistConfig, favoriteReducer),
  //!   products: date,================================
});

export default reducer;
