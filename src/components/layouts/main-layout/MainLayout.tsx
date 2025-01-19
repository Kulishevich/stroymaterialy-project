import React, { useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import s from "./MainLayout.module.scss";
import { PopupCallback } from "@/components/popup-callback";
import PhoneAnimation from "@/components/phone-animation/PhoneAnimation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleOpenPopup = () => {
    setIsOpenPopup(true);
  };

  return (
    <div className={s.main}>
      <Header />
      <Breadcrumbs />
      <div className={s.container}>{children}</div>
      <Footer />
      <PhoneAnimation onClick={handleOpenPopup} />
      <PopupCallback isOpen={isOpenPopup} setIsOpen={setIsOpenPopup} />
    </div>
  );
};
