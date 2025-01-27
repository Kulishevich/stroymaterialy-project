import React from "react";
import { SocialNetworks } from "../social-networks";
import Image from "next/image";
import { Typography } from "../ui/typography";
import s from "./HeaderMobile.module.scss";
import {
  BagShoppingIcon,
  BurgerIcon,
  HeartOutlineIcon,
  ProfileIcon,
  SearchIcon,
} from "@/assets/icons";
import { Logo } from "@/assets/icons/logo";
import { Button } from "../ui/button";

export const HeaderMobile = () => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <SocialNetworks />
        <div className={s.phoneContainer}>
          <Image
            src={"/images/phone-operator.png"}
            width={37}
            height={13}
            alt="phone operator"
          />
          <Typography variant="body_5" as="p">
            +374 (33) 144-000
          </Typography>
        </div>
      </div>
      <div className={s.menu}>
        <div className={s.burgerContainer}>
          <Button className={s.burgerButton}>
            <BurgerIcon width={16} height={10} />
          </Button>
          <Logo variant="dark" />
        </div>
        <div className={s.buttons}>
          <SearchIcon width={26} height={26} />
          <HeartOutlineIcon width={26} height={26} />
          <BagShoppingIcon width={26} height={26} />
          <ProfileIcon width={26} height={26} />
        </div>
      </div>
    </div>
  );
};
