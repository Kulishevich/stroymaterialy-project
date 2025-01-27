import { Address } from "../addresses/address.types";
import { Product } from "../products/products.types";

export type ExtraOptionsResponse = {
  id: string;
  name: string;
};

export type CreateOrderArgs = {
  items: CreateOrderItem[];
};

export type CreateOrderItem = {
  count: number;
  id: string;
};

export type CreateOrderResponse = {
  address: null;
  date: string;
  deliveryPrice: string;
  discount: string;
  end: string;
  id: string;
  isCancelable: boolean;
  isReversable: boolean;
  method: string;
  receiptLink: null;
  start: string;
  status: string;
  subtotal: string;
  total: string;
  totalWithDelivery: string;
};

export type GetOrderResponse = {
  data: {
    address: string | null;
    addresses: Address[];
    customer: string | null;
    date: string;
    deliveryPrice: string;
    discount: string;
    end: string;
    extraOptions: ExtraOptionsResponse[] | [];
    giftCards: [];
    id: string;
    isCancelable: boolean;
    isReversable: boolean;
    items: OrderItem[];
    method: string;
    orderTypes: OrderTypes[];
    paymentMethods: PaymentMethodsType[];
    receiptLink: null;
    regions: RegionType[];
    reverses: [];
    start: string;
    status: string;
    subtotal: string;
    total: string;
    totalWithDelivery: string;
  };
};

export type OrderTypes = {
  is: number;
  isFlexible: number;
  name: string;
};

export type PaymentMethodsType = {
  available: boolean;
  description: string;
  icon: string;
  name: string;
  slug: string;
};

export type RegionType = {
  id: number;
  name: string;
};

export type OrderItem = {
  count: string;
  discount: string;
  id: number;
  product: Product;
  subtotal: string;
  total: string;
};
