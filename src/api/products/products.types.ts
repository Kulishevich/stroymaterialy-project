import { LinksTypes, MetaTypes } from "@/shared/types/types";

export type RequestParams = {
  id: string;
  perPage: number;
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

export type ProductImages = {
  main: {
    isMain: boolean;
    src: string;
  };
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

export type Product = {
  bonus: string;
  bonusPercent: string;
  brand: string;
  breadcrumbs: Breadcrumbs[];
  category: ProductCategory;
  characteristics: [];
  code: string;
  count: string;
  description: string;
  discount: string;
  discountedPrice: string;
  feedbacks: [];
  id: string;
  images: ProductImages;
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
  brand: {
    label: {
      [key: number]: string;
    };
  };
  price: {
    label: {
      min: number;
      max: number;
    };
  };
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
  favorites: [];
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
