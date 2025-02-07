import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";
import s from "./HeaderInfo.module.scss";
import { Logo } from "@/assets/icons/logo";
import { SocialNetworks } from "@/components/social-networks";
import { useTranslations } from "next-intl";

export const HeaderInfo = () => {
  const t = useTranslations("header.info");

  return (
    <div className={s.info}>
      <Logo variant="dark" />
      <div className={s.contacts}>
        <SocialNetworks />
        <div className={s.workTime}>
          <Typography variant="body_6" as="h6">
            {t("work_time")}
          </Typography>
          <Typography variant="body_5" as="p">
            {t("time")}
          </Typography>
        </div>
        <div className={s.workPhone}>
          <Typography variant="body_6" as="h6">
            {t("phone")}
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
