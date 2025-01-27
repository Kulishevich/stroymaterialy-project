import { LinksTypes, MetaTypes } from "@/shared/types/types";

export type GetAddressesResponse = {
  data: Address[];
  links: LinksTypes;
  meta: MetaTypes;
};

export type Address = {
  address: string;
  details: string;
  id: number;
  isDefault: boolean;
  regions: {
    id: number;
    name: string;
  };
};
