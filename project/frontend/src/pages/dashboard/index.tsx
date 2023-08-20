import Navbar from "@/components/Navbar";
import User from "@/components/User";
import React, { useEffect } from "react";

// import { Container } from './styles';

import usericon from "../../../public/user.png";
import { Trophy } from "@phosphor-icons/react";
import EnterpriseModal from "@/components/Dashboard/EnterpriseModal";
import enterprise from "../../../public/enterprise.png";
import InfoModal from "@/components/Dashboard/InfoModal";
const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-1 flex-row font-inter ">
      <Navbar
        colorOne={"#1818"}
        colorTwo={"#545454"}
        colorThree={"#545454"}
        colorFour={"#545454"}
        colorFive={"#545454"}
      ></Navbar>

      <div className=" flex flex-1 flex-col ml-[330px]">
        <div>
          <User img={usericon} cargo="Desenvolvedor" name="Adriano"></User>
        </div>

        <div className="flex flex-col  pl-[50px] pr-[50px] pt-[20px]  text-black">
          <div className="font-bold text-[25px] text-[#545454] flex flex-row space-x-[10px]     ">
            <div>Dashboard</div>
            <div className="">
              <Trophy
                size={40}
                color="#2AC856"
                weight="regular"
                className="-my-[6px]"
              />
            </div>
          </div>

          <div className="flex flex-row space-x-[5vw]">
            <div className="font-bold flex  mt-[20px] flex-col    ">
              <div className="text-[17px] text-[#545454]  mb-[20px]">
                Empresa que mais demandou
              </div>
              <div>
                <EnterpriseModal
                  src={enterprise}
                  empresa="Cubo"
                  horasDemandadas={"217 horas"}
                  colaboradoresDemandados={"21 colaboradores"}
                  percentualGeral={"87%"}
                ></EnterpriseModal>
              </div>
            </div>
            <div className="font-bold flex  mt-[20px] flex-col    ">
              <div className="text-[17px] text-[#545454]  mb-[20px]">
                Colaborador que mais contribuiu
              </div>
              <div>
                <EnterpriseModal
                  src={enterprise}
                  empresa="Cubo"
                  horasDemandadas={"217 horas"}
                  colaboradoresDemandados={"21 colaboradores"}
                  percentualGeral={"87%"}
                ></EnterpriseModal>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-[5vw]">
            <div className="font-bold flex  mt-[20px] flex-col    ">
              <div className="text-[17px] text-[#545454]  mb-[20px]">
                Tempo demandado por empresa
              </div>
              <div className="space-y-[1.5vw]">
                <InfoModal
                  img={enterprise}
                  info="217 horas"
                  moreInfo="42 tarefas"
                  enterprise="Cubo"
                ></InfoModal>
                <InfoModal
                  img={enterprise}
                  info="217 horas"
                  moreInfo="42 tarefas"
                  enterprise="Cubo"
                ></InfoModal>
                <InfoModal
                  img={enterprise}
                  info="217 horas"
                  moreInfo="42 tarefas"
                  enterprise="Cubo"
                ></InfoModal>
                <InfoModal
                  img={enterprise}
                  info="217 horas"
                  moreInfo="42 tarefas"
                  enterprise="Cubo"
                ></InfoModal>
              </div>
            </div>
            <div className="font-bold flex  mt-[20px] flex-col    ">
              <div className="text-[17px] text-[#545454]  mb-[20px]">
                Contribuição por colaborador
              </div>
              <div className="space-y-[1.5vw]">
                <InfoModal
                  img={enterprise}
                  info="217 horas"
                  moreInfo="5 empresas"
                  enterprise="Cubo"
                ></InfoModal>
                <InfoModal
                  img={enterprise}
                  info="217 horas"
                  moreInfo="5 empresas"
                  enterprise="Cubo"
                ></InfoModal>
                <InfoModal
                  img={enterprise}
                  info="217 horas"
                  moreInfo="5 empresas"
                  enterprise="Cubo"
                ></InfoModal>
                <InfoModal
                  img={enterprise}
                  info="217 horas"
                  moreInfo="5 empresas"
                  enterprise="Cubo"
                ></InfoModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;