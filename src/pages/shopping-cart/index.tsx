import { CartResponse } from "@/api/cart/cart.types";
import { ShoppingCart } from "@/features/ShoppingCart/shopping-cart-page/index";
import { getCart } from "@/ssr-api/getCart";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function ShoppingCartPage({
  cartData,
}: {
  cartData: CartResponse;
}) {
  return (
    <>
      <Head>
        <title>
          Domix.am - крупнейший магазин стройматериалов в Армении с Доставкой
        </title>
        <meta
          name="description"
          content="Купить строительные материалы для ремонта и стройки в строительном магазине Domix.am. Быстрая доставка. Низкие цены"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Domix.am - крупнейший магазин стройматериалов в Армении с Доставкой"
        />
        <meta
          property="og:description"
          content="Купить строительные материалы для ремонта и стройки в строительном магазине Domix.am. Быстрая доставка. Низкие цены"
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ShoppingCart cartData={cartData} />;
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = context.req.cookies?.locale || "hy";
  const token = context.req.cookies?.accessToken || "";

  const cartData = await getCart({ lang, token });

  return {
    props: { cartData },
  };
};
