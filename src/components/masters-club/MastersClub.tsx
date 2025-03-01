import React, { useState } from "react";
import s from "./MastersClub.module.scss";
import { Typography } from "../ui/typography";
import clsx from "clsx";
import { MastersClubForm } from "./masters-club-form";
import { AccumulationPoints } from "./accumulation-points";
import { useTranslations } from "next-intl";
import { ProfessionsArgs } from "@/api/professions/professions.types";
import { SpheresArgs } from "@/api/spheres/spheres.types";

export const MastersClub = ({
  professions,
  spheres,
}: {
  professions: { data: ProfessionsArgs[] };
  spheres: { data: SpheresArgs[] };
}) => {
  const t = useTranslations("cooperation.vacancies.masters_club");
  const tags = [
    {
      id: "1",
      title: t("how_to_join"),
      value: <MastersClubForm professions={professions} spheres={spheres} />,
    },
    {
      id: "2",
      title: t("accumulation_of_points"),
      value: <AccumulationPoints />,
    },
  ];
  const [activeTag, setActiveTag] = useState<string>(tags[0].id);

  return (
    <div className={s.container}>
      <div className={s.nav}>
        {tags.map((elem) => (
          <Typography
            variant="h3"
            as="h3"
            key={elem.id}
            onClick={() => setActiveTag(elem.id)}
            className={clsx(activeTag === elem.id && s.active)}
          >
            {elem.title}
          </Typography>
        ))}
      </div>
      {tags.find((elem) => activeTag === elem.id)?.value}
    </div>
  );
};
