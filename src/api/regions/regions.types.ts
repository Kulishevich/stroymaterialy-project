import { LinksTypes, MetaTypes } from "@/shared/types/types";

export type GetRegionsResponse = {
  data: Region[];
  links: LinksTypes;
  meta: MetaTypes;
};

export type Region = {
  id: number;
  name: string;
};
