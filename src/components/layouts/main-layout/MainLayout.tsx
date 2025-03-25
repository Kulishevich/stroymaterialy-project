import React, { useEffect, useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import s from "./MainLayout.module.scss";
import { PopupCallback } from "@/components/popup-callback";
// import PhoneAnimation from "@/components/phone-animation/PhoneAnimation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { HeaderMobile } from "@/components/header-mobile/HeaderMobile";
import { Toaster } from "sonner";
import { LoginFormPopup } from "@/components/login-form-popup";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginModal } from "@/store/slices/auth-modal/authModalSlice";
import { RootState } from "@/store/store";
import { clearBreadcrumbs } from "@/store/slices/breadcrumbs/breadcrumbsSlice";
import { useRouter } from "next/router";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const isMobile = useIsMobile("tablet");
  const isOpen = useSelector((state: RootState) => state.authModal.isOpen);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (
        !url.startsWith("/category") &&
        !url.startsWith("/subcategory") &&
        !url.startsWith("/products") &&
        !url.startsWith("/product")
      ) {
        dispatch(clearBreadcrumbs());
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router, dispatch]);

  // const handleOpenPopup = () => {
  //   setIsOpenPopup(true);
  // };

  const handleOpenLogin = () => {
    dispatch(toggleLoginModal());
  };

  return (
    <div className={s.main}>
      {!isMobile ? <Header /> : <HeaderMobile />}
      <Breadcrumbs />
      <div className={s.container}>{children}</div>
      <Footer />
      {/* <PhoneAnimation onClick={handleOpenPopup} /> */}
      <PopupCallback isOpen={isOpenPopup} setIsOpen={setIsOpenPopup} />
      <LoginFormPopup isOpen={isOpen} setIsOpen={handleOpenLogin} />
      <Toaster />
    </div>
  );
};
