import { domixApi } from "../domix.api";
import { ContentResponse } from "./content.types";

export const contentApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getContent: builder.query<ContentResponse, string>({
        query: (key) => ({
          url: `/contents?keys[]=${key}`,
        }),
      }),
    };
  },
});

export const { useGetContentQuery } = contentApi;
