import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characters/charactersSlice";
import { logger } from "./logger";

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(logger);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
