import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";
import ThemChange from "../ThemeChange/ThemChange";
import { useLoaderData } from "react-router";

const Header = () => {
 
 
  return (
    <header>
      <div className="flex flex-col gap-5 items-center">
        <img className="w-[350px]" src={logo} alt="" />
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <p className="text-accent">
          {format(new Date(), "EEEE, MMMM MM, yyyy")}
        </p>
      </div>
    </header>
  );
};

export default Header;
