import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const persistedStore = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Router />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
