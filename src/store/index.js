import { createStore } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./Reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedRedu = persistReducer(persistConfig, reducers);

export const store = createStore(persistedRedu);

export const persistor = persistStore(store);
