import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const domixApi = createApi({
  reducerPath: "domixApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_DOMIX_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Accept-Language", "RU-ru");

      return headers;
    },
  }),
  endpoints: () => ({}),
  // tagTypes: ["Me", "Profile", "Devices", "Posts"],
});
