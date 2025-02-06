import React from "react";
import s from "./Services.module.scss";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

type ServiceProps = {
  image: string;
  title: string;
  width: number;
  hight: number;
};

const Service = ({ image, title, width, hight }: ServiceProps) => {
  return (
    <div className={s.imageContainer}>
      <Image
        src={image}
        width={width}
        height={hight}
        alt="service"
        className={s.image}
        quality={100}
      />
      <div className={s.overlay}>
        <Typography variant="h3" as="h3">
          {title}
        </Typography>
      </div>
    </div>
  );
};

export const Services = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        Сервисы
      </Typography>
      <div className={s.servicesContainer}>
        <Service
          image={"/images/for-business/service1.jpg"}
          title={"Доставка и подъём"}
          width={!isMobile ? 416 : 336}
          hight={!isMobile ? 600 : 214}
        />
        <div>
          <Service
            image={"/images/for-business/service2.jpg"}
            title={"Консультация"}
            width={!isMobile ? 416 : 336}
            hight={!isMobile ? 288 : 214}
          />
          <Service
            image={"/images/for-business/service3.jpg"}
            title={"Перевозка строительного мусора"}
            width={!isMobile ? 416 : 336}
            hight={!isMobile ? 288 : 214}
          />
        </div>
        <Service
          image={"/images/for-business/service4.jpg"}
          title={"Предоставление рабочей силы и опытных работников"}
          width={!isMobile ? 416 : 336}
          hight={!isMobile ? 600 : 214}
        />
      </div>
    </div>
  );
};
