import { LinksTypes, MetaTypes } from "@/shared/types/types";

export type RequestParams = {
  id: string;
  perPage: number;
  page: number;
  filters: string;
};

export type ExtraOptionsArgs = {
  id: string;
  name: string;
};

export type Breadcrumbs = {
  is_subcategory: boolean;
  name: string;
  uuid: string;
};

export type ProductCategory = {
  categoryParentId: string;
  id: string;
  image: string;
  name: string;
};

export type ProductImagesType = {
  additional: Image[];
  main: Image;
};

export type Image = {
  isMain: boolean;
  src: string;
};

export type ProductUnit = {
  alternative: {
    name: string;
    value: string;
  };
  name: string;
  type: string;
  value: string;
};

export type Characteristic = {
  name: string;
  value: string;
};

export type Product = {
  bonus: string | null;
  bonusPercent: string;
  brand: string;
  breadcrumb: Breadcrumbs[];
  category: ProductCategory;
  characteristics: Characteristic[];
  code: string;
  count: string;
  description: string;
  discount: string;
  discountedPrice: string;
  feedbacks: [];
  id: string;
  images: ProductImagesType;
  isNew: number;
  isPopular: number;
  name: string;
  price: string;
  rating: number;
  relates: [];
  similars: Product[];
  unit: ProductUnit;
};

export type Filters = {
  "category.filters.price.label": {
    "category.filters.price.max": number;
    "category.filters.price.min": number;
  };
  "category.filters.brand.label": string[] | Record<string, string | number>;
};

export type ProductsData = {
  data: Product[];
  links: LinksTypes;
  meta: MetaTypes;
};

export type ResponseProductsByCategory = {
  data: {
    colors: [];
    filters: Filters;
    products: ProductsData;
  };
  errors: boolean;
  message: string;
};

export type GetFavotireResponse = {
  discountDetails: DiscountDetailsTypes;
  email: string;
  favorites: Product[];
  firstName: string;
  fullName: string;
  isPartner: boolean;
  lastName: string;
  phone: string;
};

export type DiscountDetailsTypes = {
  discountPercent: number;
  isFreeDelivery: boolean;
  isFreeWorkerService: boolean;
  level: number;
};

export type addInFavoriteArgs = { products: string[] };

export type addInFavoriteResponse = {
  discountDetails: DiscountDetailsType;
  email: string;
  favorites: Product[];
  firstName: string;
  fullName: string;
  isPartner: boolean;
  lastName: string;
  phone: string;
};

export type DiscountDetailsType = {
  discountPercent: number;
  isFreeDelivery: boolean;
  isFreeWorkerService: boolean;
  level: number;
};
