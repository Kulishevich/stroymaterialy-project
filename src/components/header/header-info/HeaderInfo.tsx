import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";
import s from "./HeaderInfo.module.scss";
import { Logo } from "@/assets/logo";
import { SocialNetworks } from "@/components/social-networks";

export const HeaderInfo = () => {
  return (
    <div className={s.info}>
      <Logo variant="dark" />
      <div className={s.contacts}>
        <SocialNetworks />
        <div className={s.workTime}>
          <Typography variant="body_6" as="h6">
            Время работы:
          </Typography>
          <Typography variant="body_5" as="p">
            с 09:00 до 22:00 ежедневно
          </Typography>
        </div>
        <div className={s.workPhone}>
          <Typography variant="body_6" as="h6">
            Телефон:
          </Typography>
          <div className={s.phoneContainer}>
            <Image
              src={"/images/phone-operator.png"}
              width={45}
              height={16}
              alt="phone operator"
            />
            <Typography variant="body_5" as="p">
              +374 (33) 144-000
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
