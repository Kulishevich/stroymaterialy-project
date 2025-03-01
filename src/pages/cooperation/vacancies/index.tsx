import { ProfessionsArgs } from "@/api/professions/professions.types";
import { SpheresArgs } from "@/api/spheres/spheres.types";
import { VacanciesPage as Vacancies } from "@/features/Vacancies/vacancies-page";
import { getProfessions } from "@/ssr-api/getProfessions";
import { getSpheres } from "@/ssr-api/getSpheres";
import { GetServerSideProps } from "next";

export default function VacanciesPage({
  professions,
  spheres,
}: {
  professions: { data: ProfessionsArgs[] };
  spheres: { data: SpheresArgs[] };
}) {
  return <Vacancies professions={professions} spheres={spheres} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = context.req.cookies?.locale || "hy";

  const professions = await getProfessions({ lang });
  const spheres = await getSpheres({ lang });

  return { props: { professions, spheres } };
};
