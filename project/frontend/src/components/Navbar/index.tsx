import Image from "next/image";
import React from "react";

import Logo from "../../../public/logo.png";
import Option from "./Option";

import { Horse, Heart, Cube, House } from "@phosphor-icons/react";

// import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <div className="w-[324px] h-screen bg-[#FAFAFA]  ">
      <div className="flex flex-1 justify-center items-center h-[100px] ">
        <Image alt="" src={Logo} className="w-[180px] "></Image>
      </div>
      <div>
        <Option
          icon={<House size={32}></House>}
          name="Dashboard"
          color=""
          src=""
          id="dashboard"
        />
      </div>
    </div>
  );
};

export default Navbar;
