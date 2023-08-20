import Image from "next/image";
import React from "react";

// import { Container } from './styles';
interface Props {
  src: any;
  empresa: string;
  horasDemandadas: string;
  colaboradoresDemandados: string;
  percentualGeral: string;
}

const EmployeerModal: React.FC<Props> = ({
  src,
  empresa,
  horasDemandadas,
  colaboradoresDemandados,
  percentualGeral,
}) => {
  return (
    <div className="w-[30vw] rounded-[15px] h-[10vw] bg-[#F8F8F8] shadow-md flex flex-row space-x-[0.8vw]">
      <div className=" flex flex-col justify-center w-[6vw] items-center">
        <Image alt="" className="w-[4vw]" src={src}></Image>
        <div className="text-[1.2vw] mt-[10px]">{empresa}</div>
      </div>
      <div className="flex flex-row space-x-[2vw]  justify-center items-center">
        <div className="flex flex-col space-y-[0.5vw]">
          <div className="text-[1vw]">Horas trabalhadas:</div>
          <div className="text-[1vw] w-[20px]">Empresas relacionadas:</div>
          <div className="text-[1vw]">Percentual geral:</div>
        </div>
        <div className="flex flex-col space-y-[1.2vw] text-[#2AC856]">
          <div className="text-[1vw]">{horasDemandadas}</div>
          <div className="text-[1vw]">{colaboradoresDemandados}</div>
          <div className="text-[1vw]">{percentualGeral}</div>
        </div>
      </div>
    </div>
  );
};

export default EmployeerModal;
