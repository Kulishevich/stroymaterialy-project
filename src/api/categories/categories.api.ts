import { domixApi } from "../domix.api";
import { RequestParams } from "../products/products.types";
import { CategoryArgs } from "./categories.types";

export const categoriesApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getCategories: builder.query<{ data: CategoryArgs[] }, void>({
        query: () => ({
          url: "/categories/simple",
        }),
      }),
      getSubCategories: builder.query<{ data: CategoryArgs[] }, RequestParams>({
        query: ({ id, perPage }) => ({
          url: `/categories/${id}?perPage=${perPage}`,
        }),
      }),
    };
  },
});

export const { useGetCategoriesQuery, useGetSubCategoriesQuery } =
  categoriesApi;
