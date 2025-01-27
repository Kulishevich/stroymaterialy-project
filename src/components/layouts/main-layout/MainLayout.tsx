import React, { useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import s from "./MainLayout.module.scss";
import { PopupCallback } from "@/components/popup-callback";
import PhoneAnimation from "@/components/phone-animation/PhoneAnimation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { HeaderMobile } from "@/components/header-mobile/HeaderMobile";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const isMobile = useIsMobile("tablet");
  const handleOpenPopup = () => {
    setIsOpenPopup(true);
  };
  console.log(isMobile);
  return (
    <div className={s.main}>
      {!isMobile ? <Header /> : <HeaderMobile />}
      <Breadcrumbs />
      <div className={s.container}>{children}</div>
      <Footer />
      <PhoneAnimation onClick={handleOpenPopup} />
      <PopupCallback isOpen={isOpenPopup} setIsOpen={setIsOpenPopup} />
    </div>
  );
};
