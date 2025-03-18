import {
  ExtraOptionsResponse,
  GetOrderResponse,
} from "@/api/orders/orders.types";
import { PaymentPage as Payment } from "@/features/Payment/payment-page/PaymentPage";
import { getExtraOptions } from "@/ssr-api/getExtraOptions";
import { getOrder } from "@/ssr-api/getOrder";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function PaymentPage({
  order,
  extraOptions,
}: {
  order: GetOrderResponse;
  extraOptions: { data: ExtraOptionsResponse[] };
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
        <Payment order={order} extraOptions={extraOptions} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = context.req.cookies?.locale || "hy";
  const { orderId } = context.params as { orderId: string };

  const order = await getOrder({ lang, id: orderId });
  const extraOptions = await getExtraOptions({ lang });

  return { props: { order, extraOptions } };
};
