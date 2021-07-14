import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";

// import { PersistGate } from "redux-persist/integration/react";
// import { persistor, store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);
