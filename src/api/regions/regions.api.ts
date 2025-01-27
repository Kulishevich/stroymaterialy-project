import { domixApi } from "../domix.api";

export const regionsApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getRegions: builder.query<any, { perPage: number }>({
        query: ({ perPage }) => ({
          url: `regions/${perPage}`,
        }),
      }),
    };
  },
});

export const { useGetRegionsQuery } = regionsApi;
