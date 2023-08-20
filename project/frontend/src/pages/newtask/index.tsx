import Navbar from "@/components/Navbar";
import User from "@/components/User";
import React, { useEffect } from "react";

// import { Container } from './styles';

import usericon from "../../../public/user.png";
import { Clock } from "@phosphor-icons/react";
import Image from "next/image";
import User1 from "../../../public/User1.png";
import User2 from "../../../public/User2.png";

const newtask: React.FC = () => {
  return (
    <div className="">
      <Navbar
        colorOne={"#545454"}
        colorTwo={"#545454"}
        colorThree={"#1818"}
        colorFour={"#545454"}
        colorFive={"#545454"}
      ></Navbar>
      <div className=" flex flex-1 flex-col ml-[330px] pl-[50px]">
        <div>
          <User img={usericon} cargo="Desenvolvedor" name="Adriano"></User>
        </div>
        <div className="pt-[2vw] pb-[30px] ">
          <div className="flex flex-row items-center ">
            <input
              className="placeholder:text-[3vw] h-[5vw] font-semibold  pt-[2vw] text-[2.7vw] w-[30vw] placeholder:font-semibold 
            placeholder:text-[#545454] outline-none"
              placeholder="Título da tarefa"
            ></input>
            <div className=" flex flex-row space-x-[15px]">
              <div className="flex flex-row space-x-[5px] pt-[40px] items-center ">
                <Clock size={32} color="#2AC856"></Clock>
                <div className="text-[1.2vw]">8 horas</div>
              </div>
              <div className="flex flex-row space-x-[5px] pt-[40px] items-center ">
                <Clock size={32} color="#2AC856" weight="fill"></Clock>
                <div className="text-[1.2vw]">0 hora</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-[10px] space-x-[30px]">
          <div className="w-[120px] p-[10px] rounded-[10px] bg-[#E1FFEA] text-[#545454] items-center font-medium flex justify-center">
            classificação
          </div>
          <div className="w-[100px] p-[10px]  rounded-[10px] bg-[#E1FFEA] text-[#545454] items-center font-medium flex justify-center">
            categoria
          </div>
          <div className="w-[100px]  p-[10px]  rounded-[10px] bg-[#E1FFEA] text-[#545454] items-center font-medium  flex justify-center">
            situação
          </div>
        </div>
        <div className="flex flex-row">
          <div className="mt-[30px] w-[40vw] flex flex-col">
            <div className="text-[30px]">Descrição</div>
            <textarea
              className="w-full mt-[15px] h-[15vw]"
              placeholder="Descreva mais sobre..."
            ></textarea>
          </div>

          <div>
            <div>
              <button className="w-[130px] h-[40px] rounded-[20px] text-white font-bold bg-[#2AC856]">
                <div>Status</div>
              </button>
            </div>
            <div className="flex flex-row space-x-[50px]">
              <div className="flex flex-col space-y-[30px] mt-[12px] font-bold text-[#545454]">
                <div>Demandante</div>
                <div>Colaborador</div>
                <div>Empresa</div>
                <div>Data</div>
                <div>Sprint</div>
                <div>Prioridade</div>
                <div>Relator</div>
              </div>
              <div className="flex flex-col space-y-[27px] ">
                <div className="flex flex-row space-x-[10px]">
                  <Image
                    className="rounded-full w-[35px] h-[35px]"
                    alt=""
                    src={User1}
                  ></Image>
                  <div className="text-[#2AC856] font-bold">João Silva</div>
                </div>
                <div className="flex flex-row space-x-[10px]">
                  <Image
                    className="rounded-full w-[35px] h-[35px]"
                    alt=""
                    src={User2}
                  ></Image>
                  <div className="text-[#2AC856] font-bold">Maria Clara</div>
                </div>
                <div>Space</div>
                <div>21/08/2023</div>
                <div>Desenvolvimento padrão</div>
                <div className="text-[#F31919] font-bold">Alta</div>
                <div className="flex flex-row space-x-[10px]">
                  <Image
                    className="rounded-full w-[35px] h-[35px]"
                    alt=""
                    src={User1}
                  ></Image>
                  <div className="text-[#2AC856] font-bold">João Silva</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newtask;
