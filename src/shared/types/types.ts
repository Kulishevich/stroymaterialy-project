export type LinksTypes = {
  first: string;
  last: string;
  next: string | null;
  prev: string | null;
};

export type MetaTypes = {
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
