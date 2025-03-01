import { domixApi } from "../domix.api";
import { ContentResponse } from "./content.types";

export const contentApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getContent: builder.query<ContentResponse, string>({
        query: (key) => ({
          url: `/v1/contents?keys[]=${key}`,
        }),
      }),
    };
  },
});

export const { useGetContentQuery } = contentApi;
