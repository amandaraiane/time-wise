import Image from "next/image";
import React from "react";

// import { Container } from './styles';

interface Props {
  src: any;
  alt: string;
  name: string;
}

const groupsInfo: React.FC<Props> = ({ src, alt, name }) => {
  return (
    <div className=" lg:w-[700px] flex justify-start  gap-10 p-7 rounded-2xl bg-zinc-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
      <Image src={src} alt={alt} />
      <div>
        <h3 className="text-zinc-900 font-bold mt-2">{name}</h3>
        <p>CNPJ: 48.096.956/0001-65</p>
        <p>Empresas: Cubo Cubo Cubo</p>
        <p>Colaboradores: 57</p>
      </div>
    </div>
  );
};

export default groupsInfo;
