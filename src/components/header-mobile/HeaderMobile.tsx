import React, { useState } from "react";
import { SocialNetworks } from "../social-networks";
import Image from "next/image";
import { Typography } from "../ui/typography";
import s from "./HeaderMobile.module.scss";
import {
  BagShoppingIcon,
  HeartOutlineIcon,
  ProfileIcon,
  SearchIcon,
} from "@/assets/icons";
import { Logo } from "@/assets/icons/logo";
import { Button } from "../ui/button";
import BurgerMenu from "../burger-menu/BurgerMenu";
import Link from "next/link";
import { Paths } from "@/shared/enums";
import { LoginFormPopup } from "../login-form-popup";

export const HeaderMobile = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

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
          <BurgerMenu />
          <Logo variant="dark" />
        </div>
        <div className={s.buttons}>
          <Button variant={"only_icon"} className={s.buttonIcon}>
            <SearchIcon width={26} height={26} />
          </Button>
          <Button variant={"only_icon"} className={s.buttonIcon}>
            <HeartOutlineIcon width={26} height={26} />
          </Button>
          <Button
            as={Link}
            href={Paths.shoppingCart}
            variant={"only_icon"}
            className={s.buttonIcon}
          >
            <BagShoppingIcon width={26} height={26} />
          </Button>
          <Button
            as={Link}
            href={Paths.profile}
            variant={"only_icon"}
            className={s.buttonIcon}
            onClick={() => setIsLoginFormOpen(true)}
          >
            <ProfileIcon width={26} height={26} />
          </Button>
        </div>
      </div>
      <LoginFormPopup isOpen={isLoginFormOpen} setIsOpen={setIsLoginFormOpen} />
    </div>
  );
};
