import { domixApi } from "../domix.api";
import { GetRegionsResponse } from "./regions.types";

export const regionsApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getRegions: builder.query<GetRegionsResponse, { lang: string }>({
        query: () => ({
          url: "/regions",
        }),
      }),
    };
  },
});

export const { useGetRegionsQuery } = regionsApi;
