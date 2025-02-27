import { CartResponse } from "@/api/cart/cart.types";
import { ShoppingCart } from "@/features/ShoppingCart/shopping-cart-page/index";
import { getCart } from "@/new-api/getCart";
import { GetServerSideProps } from "next";

export default function ShoppingCartPage({
  cartData,
}: {
  cartData: CartResponse;
}) {
  return <ShoppingCart cartData={cartData} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const cartData = await getCart();

  return {
    props: { cartData },
  };
};
