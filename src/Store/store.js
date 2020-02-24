import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tableReducer } from "../Reducers/reducers";

const logger = store => next => action => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd(action.type);
  return result;
};

let saveToLocalStorage = state => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
};

let loadFromLocalStorage = () => {
  const serializedState = localStorage.getItem("state");
  if (serializedState === null) return undefined;
  return JSON.parse(serializedState);
};

const persistConfig = {
  key: "root",
  storage
};

const persistedState = loadFromLocalStorage();

const persistedReducer = persistReducer(persistConfig, tableReducer);

export const store = createStore(
  persistedReducer,
  persistedState,
  applyMiddleware(logger)
);
export const persistor = persistStore(store);

store.subscribe(() => saveToLocalStorage(store.getState()));
