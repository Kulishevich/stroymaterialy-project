import { IntlProvider } from "next-intl";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import enMessages from "@/locales/en.json";
import ruMessages from "@/locales/ru.json";

const messages = { en: enMessages, ru: ruMessages };

export function IntlProviderComponent({ children }: { children: ReactNode }) {
  const { locale = "en" } = useRouter();
  const safeLocale = (locale as keyof typeof messages) || "en";
  return (
    <IntlProvider locale={safeLocale} messages={messages[safeLocale]}>
      {children}
    </IntlProvider>
  );
}
