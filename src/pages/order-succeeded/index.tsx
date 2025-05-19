import { OrderSuccess } from "@/features/OrderSuccess";
import Head from "next/head";

export default function OrderSucceededPage() {
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
          content="Domix.am - крупнейший магазин стройматериалов в Армении"
        />
        <meta
          property="og:description"
          content="Купить строительные материалы для ремонта и стройки в Domix.am. Быстрая доставка и низкие цены!"
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OrderSuccess />
    </>
  );
}
