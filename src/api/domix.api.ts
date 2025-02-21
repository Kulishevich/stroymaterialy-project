import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/store/store";

export const domixApi = createApi({
  reducerPath: "domixApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_DOMIX_BASE_URL,
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
  }),
  endpoints: () => ({}),
  tagTypes: ["Cart", "Addresses", "Favorites", "Setting", "Orders"],
});
