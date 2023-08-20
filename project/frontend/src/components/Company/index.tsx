import Image from "next/image";
import React from "react";

// import { Container } from './styles';

interface Props {
  src: any;
  alt: string;
  name: string;
}

const companyInfo: React.FC<Props> = ({ src, alt, name }) => {
  return (
    <div className=" w-56 flex  flex-col  justify-center items-center  gap-2 p-3 rounded-2xl bg-zinc-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
      <Image src={src} alt={alt} />
      <h3 className="text-zinc-900 font-medium mt-2">{name}</h3>
    </div>
  );
};

export default companyInfo;
