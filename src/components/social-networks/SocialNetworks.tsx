import React from "react";
import s from "./SocialNetworks.module.scss";
import {
  FacebookOutlinedIcon,
  InstagramOutlinedIcon,
  TelegramOutlinedIcon,
  WhatsappOutlined,
} from "@/assets/icons";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export const SocialNetworks = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.icons}>
      <TelegramOutlinedIcon
        height={!isMobile ? 36 : 24}
        width={!isMobile ? 36 : 24}
      />
      <WhatsappOutlined
        height={!isMobile ? 36 : 24}
        width={!isMobile ? 36 : 24}
      />
      <InstagramOutlinedIcon
        height={!isMobile ? 36 : 24}
        width={!isMobile ? 36 : 24}
      />
      <FacebookOutlinedIcon
        height={!isMobile ? 36 : 24}
        width={!isMobile ? 36 : 24}
      />
    </div>
  );
};
