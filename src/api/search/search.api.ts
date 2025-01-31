import { domixApi } from "../domix.api";

export const searchApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getSearchItems: builder.query<void, { keyword: string; perPage: string }>(
        {
          query: ({ keyword, perPage }) => ({
            url: `/search/${keyword}?perPage=${perPage}`,
          }),
        }
      ),
    };
  },
});

export const { useGetSearchItemsQuery } = searchApi;
