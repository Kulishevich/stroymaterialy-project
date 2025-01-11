import { Error } from "@/components/error";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import React from "react";

export default function _error() {
  return (
    <div>
      <Header />
      <Error />
      <Footer />
    </div>
  );
}
