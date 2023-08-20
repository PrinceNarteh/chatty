import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/userSlice";
import appApi from "./appApi";

// persist store
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

// reducers
const reducers = combineReducers({
  user: usersReducer,
  [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  backList: [appApi.reducerPath],
};

// persist our store
const persistedReducer = persistReducer(persistConfig, reducers);

// creating the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, appApi.middleware],
});

export default store;
