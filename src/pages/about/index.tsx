import { ContentItem } from "@/api/content/content.types";
import { AboutPage as About } from "@/features/About/about-page";
import { getAllContent } from "@/ssr-api/getContent";
import { GetStaticProps } from "next";
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

export const getStaticProps: GetStaticProps = async (context) => {
  const lang = context.locale || "hy";
  const content = await getAllContent({ lang });

  return {
    props: {
      discounts: content.data.filter(
        (item: ContentItem) => item.key === "discounts"
      ),
      secondBanner: content.data.filter(
        (item: ContentItem) => item.key === "services"
      ),
    },
    revalidate: 21600,
  };
};
