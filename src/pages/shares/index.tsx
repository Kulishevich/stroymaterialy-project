import { ContentResponse } from "@/api/content/content.types";
import { SharesPage as Shares } from "@/features/Shares/shares-page";
import { getContent } from "@/ssr-api/getContent";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function SharesPage({ content }: { content: ContentResponse }) {
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
        <Shares content={content} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = context.req.cookies?.locale || "hy";
  const content = await getContent({ key: "discounts", lang });

  return { props: { content } };
};
