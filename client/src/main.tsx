import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

import Router from "./Router.tsx";
import "./index.css";
import store from "./redux/store.ts";

const persistedStore = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Router />
      </PersistGate>
    </Provider>
    <Toaster />
  </React.StrictMode>
);
