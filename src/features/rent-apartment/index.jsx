import React from "react";
import Navigation from "../../layouts/Navbar";
import RentNavigationComponents from "./components/RentNavigation";
import Footer from "../../layouts/Footer";

import "./style/rent.scss";

const RentPageIndex = () => {
  return (
    <>
      <Navigation />
      <RentNavigationComponents />
      <Footer />
    </>
  );
};

export default RentPageIndex;
