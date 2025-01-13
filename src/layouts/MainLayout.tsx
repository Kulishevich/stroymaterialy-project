import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import React from "react";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
