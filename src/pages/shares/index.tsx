import { ContentResponse } from "@/api/content/content.types";
import { SharesPage as Shares } from "@/features/Shares/shares-page";
import { getContent } from "@/ssr-api/getContent";
import { GetServerSideProps } from "next";

export default function SharesPage({ content }: { content: ContentResponse }) {
  return <Shares content={content} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = context.req.cookies?.locale || "hy";
  const content = await getContent({ key: "discounts", lang });

  return { props: { content } };
};
