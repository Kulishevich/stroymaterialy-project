import { domixApi } from "../domix.api";
import { ContentResponse } from "./content.types";

export const contentApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getContent: builder.query<{ data: ContentResponse[] }, { key: string }>({
        query: (key) => ({
          url: `/contents?key=${key}`,
        }),
      }),
    };
  },
});

export const { useGetContentQuery } = contentApi;
