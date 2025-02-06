// src/app/store.ts
import { domixApi } from "@/api/domix.api";
import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./slices/lang/langSlice";
import authReducer from "./slices/auth/authSlice";
import authModalReducer from "./slices/auth-modal/authModalSlice";
import breadcrumbsReducer from "./slices/breadcrumbs/breadcrumbsSlice";
import favoritesReduces from "./slices/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    [domixApi.reducerPath]: domixApi.reducer,
    lang: langReducer,
    auth: authReducer,
    authModal: authModalReducer,
    breadcrumbs: breadcrumbsReducer,
    favorites: favoritesReduces,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(domixApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
