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
  region: {
    id: number;
    name: string;
  };
};

export type CreateAddressArgs = {
  regionId: number;
  address: string;
  details: string;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CreateAddressResponse = any;

export type UpdateAddressArgs = {
  regionId: number;
  address: string;
  details: string;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UpdateAddressResponse = any;
