import { LinksTypes, MetaTypes } from "@/shared/types/types";
import { OrderItemResponse } from "../orders/orders.types";

export type UserSettingResponse = {
  discountDetails: DiscountDetails;
  email: string;
  firstName: string;
  fullName: string;
  isPartner: boolean;
  lastName: string;
  phone: string;
};

export type DiscountDetails = {
  discountPercent: number;
  isFreeDelivery: boolean;
  isFreeWorkerService: boolean;
  level: number;
};

export type ChangeSettingParams = {
  name?: string;
  email?: string;
  phone?: string;
};

export type ChangePasswordParams = {
  password: string;
  newPassword: string;
  newPasswordConfirmation: string;
};

export type GetGiftsReponse = {
  data: GiftType[];
};

export type GiftType = {
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isPartner: boolean;
};

export type GetOrdersResponse = {
  data: OrderItemResponse[];
  links: LinksTypes;
  meta: MetaTypes;
};
