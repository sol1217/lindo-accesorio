import { configureStore } from "@reduxjs/toolkit";
import { canimApi } from "../services/canim";
import { setupListeners } from "@reduxjs/toolkit/query";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
export const store = configureStore({
  reducer: {
    [canimApi.reducerPath]: canimApi.reducer,
    // productFilter: productFilterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(canimApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
