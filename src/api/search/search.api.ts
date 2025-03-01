import { domixApi } from "../domix.api";
import { GetSearchItemsResponse } from "./search.types";

export const searchApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getSearchItems: builder.query<
        GetSearchItemsResponse,
        { keyword: string; perPage: string }
      >({
        query: ({ keyword, perPage }) => ({
          url: `/v1/search/${keyword}?perPage=${perPage}`,
        }),
      }),
    };
  },
});

export const { useGetSearchItemsQuery } = searchApi;
