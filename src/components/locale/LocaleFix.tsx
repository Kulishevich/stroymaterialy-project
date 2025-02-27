import { useEffect } from "react";
import { useRouter } from "next/router";

const LocaleFix = () => {
  const router = useRouter();

  useEffect(() => {
    const localeFromCookie =
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("locale="))
        ?.split("=")[1] || "hy";

    if (router.locale !== localeFromCookie) {
      document.cookie = `locale=${localeFromCookie}; path=/; max-age=31536000`;
      router.replace(router.asPath, router.asPath, {
        locale: localeFromCookie,
      });
    }
  }, [router]);

  return null;
};

export default LocaleFix;
