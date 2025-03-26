import {
  ExtraOptionsResponse,
  GetOrderResponse,
} from "@/api/orders/orders.types";
import { Region } from "@/api/regions/regions.types";
import { UserSettingResponse } from "@/api/user/user.types";
import { PaymentPage as Payment } from "@/features/Payment/payment-page/PaymentPage";
import { getExtraOptions } from "@/ssr-api/getExtraOptions";
import { getOrder } from "@/ssr-api/getOrder";
import { getRegions } from "@/ssr-api/getRegions";
import { getUser } from "@/ssr-api/getUser";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function PaymentPage({
  order,
  extraOptions,
  user,
  regions,
}: {
  order: GetOrderResponse;
  extraOptions: { data: ExtraOptionsResponse[] };
  user: UserSettingResponse | null;
  regions: Region[];
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
        <Payment
          order={order}
          extraOptions={extraOptions}
          user={user}
          regions={regions}
        />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = context.req.cookies?.locale || "hy";
  const token = context.req.cookies?.accessToken || "";
  const { orderId } = context.params as { orderId: string };

  const order = await getOrder({ lang, id: orderId, token });
  const extraOptions = await getExtraOptions({ lang });
  const regions = await getRegions({ lang });
  const user = await getUser({ lang, token });

  return { props: { order, extraOptions, user, regions } };
};
