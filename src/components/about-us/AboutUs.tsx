import React from "react";
import s from "./AboutUs.module.scss";
import { Typography } from "../ui/typography";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        О нас
      </Typography>
      <Typography variant="body_2">
        Domix-молодая команда с амбициям и с высоким потенциалом,
        специализирующаяся на продаже строительных материалов для внутренней
        и внешней отделки дома или квартиры, которая поможет вам благоустроить
        свое жизненное пространство и построить свой дом мечты.
      </Typography>
      <Image
        src={"/images/about-us.jpg"}
        width={856}
        height={494}
        alt="about us"
      />
    </div>
  );
};
