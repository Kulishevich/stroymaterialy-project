import { domixApi } from "../domix.api";
import { BranchesResponse } from "./branches.types";

export const branchesApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getBrandes: builder.query<{ data: BranchesResponse[] }, void>({
        query: () => ({
          url: "/brandes",
        }),
      }),
    };
  },
});

export const { useGetBrandesQuery } = branchesApi;
