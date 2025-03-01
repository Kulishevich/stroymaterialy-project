import { ContentItem } from "@/api/content/content.types";
import { AboutPage as About } from "@/features/About/about-page";
import { getAllContent } from "@/ssr-api/getContent";
import { GetServerSideProps } from "next";

export default function AboutPage({
  discounts,
  secondBanner,
}: {
  discounts: ContentItem[];
  secondBanner: ContentItem[];
}) {
  return <About discounts={discounts} secondBanner={secondBanner} />;
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
