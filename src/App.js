import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import products from "./data/products/products.json";
import { loadProductSuccess } from "./redux/products/products-actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductSuccess(products));
  }, [dispatch]);

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
