import { CartResponse } from "@/api/cart/cart.types";
import { ShoppingCart } from "@/features/ShoppingCart/shopping-cart-page/index";
import { getCart } from "@/ssr-api/getCart";
import { GetServerSideProps } from "next";

export default function ShoppingCartPage({
  cartData,
}: {
  cartData: CartResponse;
}) {
  return <ShoppingCart cartData={cartData} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = context.req.cookies?.locale || "hy";
  const cartData = await getCart({ lang });

  return {
    props: { cartData },
  };
};
