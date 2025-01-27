import { Product } from "../products/products.types";

export type CartResponse = {
  data: CartItem;
};

export type CartItem = {
  count: number;
  discount: string;
  list: CartList[];
  subtotal: string;
  total: string;
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
