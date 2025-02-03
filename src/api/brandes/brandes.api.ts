import { domixApi } from "../domix.api";
import { BrandesResponse } from "./brandes.types";

export const brandesApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getBrandes: builder.query<{ data: BrandesResponse[] }, void>({
        query: () => ({
          url: "/brandes",
        }),
      }),
    };
  },
});

export const { useGetBrandesQuery } = brandesApi;
