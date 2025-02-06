import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ru", "hy"],
  defaultLocale: "ru",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
