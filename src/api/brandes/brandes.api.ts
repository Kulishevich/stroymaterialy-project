import { domixApi } from "../domix.api";

export const brandesApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getBrandes: builder.query<any, void>({
        query: () => ({
          url: "/brandes",
        }),
      }),
    };
  },
});

export const { useGetBrandesQuery } = brandesApi;
