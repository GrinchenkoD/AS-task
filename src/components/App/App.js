import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Header from "../Header/Header";
import FavoritePage from "../../pages/FavoritePage/FavoritePage";
import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import products from "../../data/products/products.json";
import { loadProductSuccess } from "../../redux/products/products-actions";
import { loadFavoriteSuccess } from "../../redux/favorite/favorite-actions";

let result;

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadProductSuccess(products));
    const favorites = localStorage.getItem("favorites");
    result = JSON.parse(favorites);

    if (result) {
      dispatch(loadFavoriteSuccess(result));
      history.push("/favorite");
    }
    if (result) {
    }
  }, [dispatch, history]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/favorite" component={FavoritePage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
};

export default App;
