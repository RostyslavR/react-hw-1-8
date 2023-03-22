import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/slice";
import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filter/slice";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const userPersistConfig = {
  key: "phonebook",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    user: persistReducer(userPersistConfig, userReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
