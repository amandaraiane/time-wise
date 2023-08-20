import Image from "next/image";
import React from "react";

// import { Container } from './styles';

interface Props {
  img: any;
  info: string;
  enterprise: string;
  moreInfo: string;
}

const InfoModal: React.FC<Props> = ({ img, info, moreInfo, enterprise }) => {
  return (
    <div className=" flex flex-row space-x-[2vw] w-[30vw] h-[6vw] bg-[#F8F8F8] rounded-[15px] shadow-md ">
      <div className="w-[3vw] flex items-center ml-[1vw]">
        <Image alt="" src={img}></Image>
      </div>
      <div className="flex flex-row items-center space-x-[2vw]">
        <div className="text-[#545454]">{enterprise}</div>
        <div className="text-[#545454]">{info}</div>
        <div className="text-[1vw] text-[#545454]">-</div>
        <div className="text-[#7B7B7B]">{moreInfo}</div>
      </div>
    </div>
  );
};

export default InfoModal;
