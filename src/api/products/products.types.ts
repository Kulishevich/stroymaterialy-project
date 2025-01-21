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

export type PaginationLinks = {
  first: string;
  last: string;
  next: string;
  prev: string | null;
};

export type PaginationMeta = {
  current_page: number;
  from: number;
  last_page: number;
  links: {
    active: boolean;
    label: number;
    url: string;
  }[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type ProductsData = {
  data: Product[];
  links: PaginationLinks;
  meta: PaginationMeta;
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
