import React from "react";
import Home from "./Home";
import About from "./About";
import ProductServices from "./ProductServices";
import OurVentures from "./OurVentures";
import Clients from "./Clients";
import Career from "./Career";
import ContactUs from "./ContactUs";
import Logo from "./Logo";
import Login from "./Login";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-l from-pink-200 to-sky-200">
        <div className=" flex gap-10">
          <Logo />
          <div className="flex gap-5 mt-11 ml-20">
            <Home />
            <About />
            <ProductServices />
            <OurVentures />
            <Clients />
            <Career />
            <ContactUs />
          </div>
          <Login />
          <Menu />
        </div>
        <div>
          <p className="items-cente justify-center flex pb-10 text-4xl font-bold">
          Transport Management Software In India
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
