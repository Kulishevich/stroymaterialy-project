import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "@/store/store";
import { logout } from "@/store/slices/auth/authSlice";
import { toggleLoginModal } from "@/store/slices/auth-modal/authModalSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    const lang = (getState() as RootState).lang;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Accept-Language", lang);
    headers.set("Accept", "application/json");
    return headers;
  },
});

const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    console.warn("Unauthorized");

    api.dispatch(logout());
    api.dispatch(toggleLoginModal());
  }

  return result;
};

export const domixApi = createApi({
  reducerPath: "domixApi",
  baseQuery: baseQueryWithAuth,
  endpoints: () => ({}),
  tagTypes: ["Cart", "Addresses", "Favorites", "Setting", "Orders", "Order"],
});
