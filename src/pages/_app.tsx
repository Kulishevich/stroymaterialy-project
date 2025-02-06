import type { AppProps } from "next/app";
import "@/styles/index.scss";
import { LayoutFonts } from "@/components/layouts/LayoutFonts";
import { MainLayout } from "@/components/layouts/main-layout";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { IntlProviderComponent } from "../providers/IntlProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutFonts>
      <Provider store={store}>
        <IntlProviderComponent>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </IntlProviderComponent>
      </Provider>
    </LayoutFonts>
  );
}
