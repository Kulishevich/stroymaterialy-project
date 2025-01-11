import type { AppProps } from "next/app";
import "@/styles/index.scss";
import { LayoutFonts } from "@/layouts/LayoutFonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutFonts>
      <Component {...pageProps} />
    </LayoutFonts>
  );
}
