import React from "react";
import s from "./SocialNetworks.module.scss";
import {
  FacebookOutlinedIcon,
  InstagramOutlinedIcon,
  TelegramOutlinedIcon,
  WhatsappOutlined,
} from "@/assets/icons";

export const SocialNetworks = () => {
  return (
    <div className={s.icons}>
      <TelegramOutlinedIcon height={36} width={36} />
      <WhatsappOutlined height={36} width={36} />
      <InstagramOutlinedIcon height={36} width={36} />
      <FacebookOutlinedIcon height={36} width={36} />
    </div>
  );
};
