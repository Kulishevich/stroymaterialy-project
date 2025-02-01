import { domixApi } from "../domix.api";
import { RequestParams } from "../products/products.types";
import { CategoriesBreadcrumbs, CategoryArgs } from "./categories.types";

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
      getBreadcrumbsCategories: builder.query<
        { data: CategoriesBreadcrumbs },
        string
      >({
        query: (id) => ({
          url: `/categories/${id}/breadcrumbs`,
        }),
      }),
    };
  },
});

export const {
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useGetBreadcrumbsCategoriesQuery,
} = categoriesApi;
