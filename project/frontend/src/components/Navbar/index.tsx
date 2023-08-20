import Image from "next/image";
import React from "react";

import Logo from "../../../public/logo.png";
import Option from "./Option";

import {
  Horse,
  Heart,
  Cube,
  House,
  Check,
  CheckFat,
  Plus,
  Buildings,
  UsersThree,
} from "@phosphor-icons/react";

// import { Container } from './styles';
interface Props {
  colorOne: string;
  colorTwo: string;
  colorThree: string;
  colorFour: string;
  colorFive: string;
}

const Navbar: React.FC<Props> = ({
  colorOne,
  colorTwo,
  colorThree,
  colorFour,
  colorFive,
}) => {
  return (
    <div className="w-[324px] h-screen bg-[#FAFAFA]  ">
      <div className="flex flex-1 justify-center items-center h-[100px] ">
        <Image alt="" src={Logo} className="w-[180px] "></Image>
      </div>
      <div className="flex  ml-[40px] mt-[80px] mr-[40px] space-y-[8px] justify-center flex-col">
        <Option
          icon={<House size={32} weight="bold" color={colorOne}></House>}
          name="Dashboard"
          color={colorOne}
          src="/"
          id="dashboard"
        />
        <Option
          icon={<CheckFat size={32} weight="bold" color={colorTwo}></CheckFat>}
          name="Tarefas"
          color={colorTwo}
          src="/tasks"
          id="tasks"
        />
        <Option
          icon={<Plus size={32} weight="bold" color={colorThree}></Plus>}
          name="Criar nova tarefa"
          color={colorThree}
          src="/newtask"
          id="newtask"
        />
        <Option
          icon={
            <Buildings size={32} weight="bold" color={colorFour}></Buildings>
          }
          name="Empresas"
          color={colorFour}
          src="/enterprises"
          id="enterprises"
        />
        <Option
          icon={
            <UsersThree size={32} weight="bold" color={colorFive}></UsersThree>
          }
          name="Grupo"
          color={colorFive}
          src="/groups"
          id="groups"
        />
      </div>
    </div>
  );
};

export default Navbar;
