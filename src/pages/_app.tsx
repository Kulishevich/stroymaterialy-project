import type { AppProps } from "next/app";
import "@/styles/index.scss";
import { LayoutFonts } from "@/components/layouts/LayoutFonts";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutFonts>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </LayoutFonts>
  );
}
