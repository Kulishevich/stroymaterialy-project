import { domixApi } from "../domix.api";
import { CategoriesBreadcrumbs, CategoryArgs } from "./categories.types";

export const categoriesApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getCategories: builder.query<{ data: CategoryArgs[] }, void>({
        query: () => ({
          url: "/v1/categories/simple",
        }),
      }),
      getSubCategories: builder.query<
        { data: CategoryArgs[] },
        { id: string; perPage: number }
      >({
        query: ({ id, perPage }) => ({
          url: `/v1/categories/${id}?perPage=${perPage}`,
        }),
      }),
      getBreadcrumbsCategories: builder.query<
        { data: CategoriesBreadcrumbs },
        string
      >({
        query: (id) => ({
          url: `/v1/categories/${id}/breadcrumbs`,
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
