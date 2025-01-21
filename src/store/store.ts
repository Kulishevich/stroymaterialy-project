// src/app/store.ts
import { domixApi } from "@/api/domix.api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [domixApi.reducerPath]: domixApi.reducer, // Подключение RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(domixApi.middleware), // Добавление middleware RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
