import { Typography } from "@/shared/ui/typography";
import Head from "next/head";
import { useEffect } from "react";
import s from "./page.module.scss";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Paths } from "@/shared/enums";
import { showToast } from "@/shared/ui/toast";

export default function VirificationPage() {
  const router = useRouter();
  const { token } = router.query;
  const initToken = useSelector((state: RootState) => state.auth.token);
  const lang = router.locale || "hy";
  console.log(token, initToken, lang);

  useEffect(() => {
    if (!token) return; // Ждём пока token будет доступен из query

    const verification = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/verification/verify`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept-Language": lang,
              Authorization: `Bearer ${initToken}`,
            },
            body: JSON.stringify({ token }),
          }
        );
        console.log(res);
        if (res.ok) {
          router.push(Paths.home);
          showToast({ variant: "success", message: "Success verification" });
        } else {
          showToast({ variant: "error", message: "Error verification" });
          console.error("Ошибка при верификации", await res.text());
        }
      } catch (err) {
        console.error(err);
      }
    };

    verification();
  }, [token, initToken, lang]);

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
          content="Domix.am - крупнейший магазин стройматериалов в Армении с Доставкой"
        />
        <meta
          property="og:description"
          content="Купить строительные материалы для ремонта и стройки в строительном магазине Domix.am. Быстрая доставка. Низкие цены"
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.container}>
        <Typography variant="h2">Verification...</Typography>
      </div>
    </>
  );
}
