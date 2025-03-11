import { domixApi } from "../domix.api";
import { SpheresArgs } from "./spheres.types";

export const spheresApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getSpheres: builder.query<{ data: SpheresArgs[] }, void>({
        query: () => ({
          url: "/spheres",
        }),
      }),
    };
  },
});

export const { useGetSpheresQuery } = spheresApi;
