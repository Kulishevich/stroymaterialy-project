import { domixApi } from "../domix.api";

export const brandesApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getBrandes: builder.query<any, void>({
        query: () => ({
          url: "/brandes",
        }),
      }),
    };
  },
});

export const { useGetBrandesQuery } = brandesApi;
