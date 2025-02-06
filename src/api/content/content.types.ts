export type ContentItem = {
  key: string;
  type: string;
  src: string;
  link: string | null;
  description: string | null;
  value: string | null;
};

export type ContentResponse = {
  data: ContentItem[];
};
