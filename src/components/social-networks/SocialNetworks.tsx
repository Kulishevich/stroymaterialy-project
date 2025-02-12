import React from "react";
import s from "./SocialNetworks.module.scss";
import {
  FacebookOutlinedIcon,
  InstagramOutlinedIcon,
  TelegramOutlinedIcon,
  WhatsappOutlined,
} from "@/assets/icons";

type SocialNetworksProps = {
  size?: number;
};

export const SocialNetworks = ({ size = 36 }: SocialNetworksProps) => {
  return (
    <div className={s.icons}>
      <TelegramOutlinedIcon height={size} width={size} />
      <WhatsappOutlined height={size} width={size} />
      <InstagramOutlinedIcon height={size} width={size} />
      <FacebookOutlinedIcon height={size} width={size} />
    </div>
  );
};
