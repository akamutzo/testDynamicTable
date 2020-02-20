import React from "react";
import ReactDOM from "react-dom";
import { AppConnect } from "./App";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Store/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={" "} persistor={persistor}>
      <AppConnect /> 
    </PersistGate>
  </Provider>,
  rootElement
);

