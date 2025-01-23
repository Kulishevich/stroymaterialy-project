import { Product } from "../products/products.types";

export type CartResponse = {
  data: {
    count: number;
    discount: string;
    list: CartList[];
    subtotal: string;
    total: string;
  };
};

export type CartList = {
  count: number;
  product: Product;
  total: string;
};

export type AddItemArgs = {
  id: string;
  count: number;
};
