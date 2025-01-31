// src/app/store.ts
import { domixApi } from "@/api/domix.api";
import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./slices/lang/langSlice";
import authReducer from "./slices/auth/authSlice";
import authModalReducer from "./slices/auth-modal-slice/authModalSlice";

export const store = configureStore({
  reducer: {
    [domixApi.reducerPath]: domixApi.reducer,
    lang: langReducer,
    auth: authReducer,
    authModal: authModalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(domixApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
