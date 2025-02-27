import { IntlProvider } from "next-intl";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import ruMessages from "@/locales/ru.json";
import hyMessages from "@/locales/hy.json";

const messages = { ru: ruMessages, hy: hyMessages };

export function IntlProviderComponent({ children }: { children: ReactNode }) {
  const { locale = "hy" } = useRouter();
  const safeLocale = (locale as keyof typeof messages) || "hy";

  return (
    <IntlProvider locale={safeLocale} messages={messages[safeLocale]}>
      {children}
    </IntlProvider>
  );
}
