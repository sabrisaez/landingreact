import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { HomeLayout } from "../../layout/home/home_layout";
import { Footer } from "../../components/footer/footer";

export const Contactpage = () => {
  return (
    <div>
      <Navbar />
      <HomeLayout></HomeLayout>
      <Footer />
    </div>
  );
};
