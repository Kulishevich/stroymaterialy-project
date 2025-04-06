import React from "react";
import { SocialNetworks } from "../social-networks";
import Image from "next/image";
import { Typography } from "../ui/typography";
import s from "./HeaderMobile.module.scss";
import {
  BagShoppingIcon,
  HeartOutlineIcon,
  ProfileIcon,
} from "@/shared/assets/icons";
import { Logo } from "@/shared/assets/icons/logo";
import { Button } from "../ui/button";
import BurgerMenu from "../burger-menu/BurgerMenu";
import Link from "next/link";
import { Paths } from "@/shared/enums";
import { SearchMobile } from "../search-mobile";
import { SelectLanguage } from "../ui/select-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleLoginModal } from "@/store/slices/auth-modal/authModalSlice";
import { useRouter } from "next/router";

export const HeaderMobile = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleFavoritesClick = () => {
    if (token) {
      router.push(`${Paths.profile}?tab=favorites`);
    } else {
      dispatch(toggleLoginModal());
    }
  };

  const handleProfileClick = () => {
    if (token) {
      router.push(`${Paths.profile}`);
    } else {
      dispatch(toggleLoginModal());
    }
  };

  return (
    <div className={s.container}>
      <div className={s.info}>
        <SocialNetworks size={24} />
        <SelectLanguage className={s.selectLanguage} />
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
          <SearchMobile />
          <Button
            variant={"only_icon"}
            className={s.buttonIcon}
            onClick={handleFavoritesClick}
          >
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
            variant={"only_icon"}
            className={s.buttonIcon}
            onClick={handleProfileClick}
          >
            <ProfileIcon width={26} height={26} />
          </Button>
        </div>
      </div>
    </div>
  );
};
