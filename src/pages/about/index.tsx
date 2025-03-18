import { ContentItem } from "@/api/content/content.types";
import { AboutPage as About } from "@/features/About/about-page";
import { getAllContent } from "@/ssr-api/getContent";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function AboutPage({
  discounts,
  secondBanner,
}: {
  discounts: ContentItem[];
  secondBanner: ContentItem[];
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
          content="Domix.am - крупнейший магазин стройматериалов в Армении"
        />
        <meta
          property="og:description"
          content="Купить строительные материалы для ремонта и стройки в Domix.am. Быстрая доставка и низкие цены!"
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <About discounts={discounts} secondBanner={secondBanner} />;
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = context.req.cookies?.locale || "hy";

  const content = await getAllContent({ lang });
  const discounts = content.data.filter(
    (elem: ContentItem) => elem.key === "discounts"
  );
  const secondBanner = content.data.filter(
    (elem: ContentItem) => elem.key === "secondBanner"
  );

  return { props: { discounts, secondBanner } };
};
