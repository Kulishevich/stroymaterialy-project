export type CategoryArgs = {
  categoryParentId?: string;
  id: string;
  image: string;
  name: string;
  productsCount: number;
  subcategoriesCount?: number;
};

export type CategoriesBreadcrumbs = {
  breadcrumb: CategoryBreadcrumbs[];
  categoryParentId: string | null;
  id: string;
  image: string;
  name: string;
};

export type CategoryBreadcrumbs = {
  is_subcategory: boolean;
  name: string;
  uuid: string;
};
