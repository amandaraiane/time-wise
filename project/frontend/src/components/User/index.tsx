import Image from "next/image";
import React from "react";

// import { Container } from './styles';

interface Props {
  img: any;
  name: string;
  cargo: string;
}
const User: React.FC<Props> = ({ img, name, cargo }) => {
  return (
    <div className=" flex justify-end items-center pr-[60px] pt-[20px] w-full h-[90px] space-x-[15px] ">
      <div className="">
        <Image
          alt=""
          src={img}
          className="w-[75px] border-[0.5px] border-zinc-300 shadow-md rounded-full "
        ></Image>
      </div>
      <div className="space-y-[-3px]">
        <div className="font-semibold text-[32px] text-[#2AC856]">{name}</div>
        <div className="text-[#989898] ">{cargo}</div>
      </div>
    </div>
  );
};

export default User;
