import Navbar from "@/components/Navbar";
import User from "@/components/User";
import React, { useEffect } from "react";

// import { Container } from './styles';

import usericon from "../../../public/user.png";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-1 flex-row">
      <Navbar
        colorOne={"#1818"}
        colorTwo={"#545454"}
        colorThree={"#545454"}
        colorFour={"#545454"}
        colorFive={"#545454"}
      ></Navbar>

      <div className=" flex flex-1 flex-col">
        <User img={usericon} cargo="Desenvolvedor" name="Adriano"></User>
      </div>
    </div>
  );
};

export default Dashboard;
