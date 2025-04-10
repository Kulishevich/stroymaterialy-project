import { ProfessionsArgs } from "@/api/professions/professions.types";
import { SpheresArgs } from "@/api/spheres/spheres.types";
import { VacanciesPage as Vacancies } from "@/features/Vacancies/vacancies-page";
import { getProfessions } from "@/ssr-api/getProfessions";
import { getSpheres } from "@/ssr-api/getSpheres";
import { GetStaticProps } from "next";
import Head from "next/head";

export default function VacanciesPage({
  professions,
  spheres,
}: {
  professions: { data: ProfessionsArgs[] };
  spheres: { data: SpheresArgs[] };
}) {
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
          content="Domix.am - крупнейший магазин стройматериалов в Армении"
        />
        <meta
          property="og:description"
          content="Купить строительные материалы для ремонта и стройки в Domix.am. Быстрая доставка и низкие цены!"
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Vacancies professions={professions} spheres={spheres} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const lang = context.locale || "hy";
  const professions = await getProfessions({ lang });
  const spheres = await getSpheres({ lang });

  return { props: { professions, spheres }, revalidate: 21600 };
};
