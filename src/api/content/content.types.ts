export type ContentItem = {
  key: string;
  type: string;
  src: string;
  link: string;
  description: string | null;
  value: string | null;
};

export type ContentResponse = {
  data: ContentItem[];
};
