import React, { useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import s from "./MainLayout.module.scss";
import { PopupCallback } from "@/components/popup-callback";
import PhoneAnimation from "@/components/phone-animation/PhoneAnimation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { HeaderMobile } from "@/components/header-mobile/HeaderMobile";
import { Toaster } from "sonner";
import { LoginFormPopup } from "@/components/login-form-popup";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginModal } from "@/store/slices/auth-modal-slice/authModalSlice";
import { RootState } from "@/store/store";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const isMobile = useIsMobile("tablet");
  const isOpen = useSelector((state: RootState) => state.authModal.isOpen);
  const dispatch = useDispatch();

  const handleOpenPopup = () => {
    setIsOpenPopup(true);
  };

  const handleOpenLogin = () => {
    dispatch(toggleLoginModal());
  };

  return (
    <div className={s.main}>
      {!isMobile ? <Header /> : <HeaderMobile />}
      <Breadcrumbs />
      <div className={s.container}>{children}</div>
      <Footer />
      <PhoneAnimation onClick={handleOpenPopup} />
      <PopupCallback isOpen={isOpenPopup} setIsOpen={setIsOpenPopup} />
      <LoginFormPopup isOpen={isOpen} setIsOpen={handleOpenLogin} />
      <Toaster />
    </div>
  );
};
