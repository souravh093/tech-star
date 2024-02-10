import React from "react";
import Header from "../../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
