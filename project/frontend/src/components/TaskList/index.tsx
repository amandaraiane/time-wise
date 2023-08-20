import { Clock } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

// import { Container } from './styles';

interface Props {
  src: any;
  alt: string;
  name: string;
  title: string;
  status: string;
  date: string;
  category: string;
  imagePlaintiff: any;
  imageCollaborator: any;
}

const taskList: React.FC<Props> = ({
  src,
  alt,
  name,
  title,
  status,
  date,
  category,
  imagePlaintiff,
  imageCollaborator,
}) => {
  return (
    <div className="font-inter flex items-center gap-2 p-5 rounded-2xl bg-zinc-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300 text-[#545454]">
      <div>
        <Image src={src} alt={alt} className="max-w-[35px]" />
        <p>{name}</p>
      </div>
      <div>
        <span className="ml-4 text-xl font-bold">{title}</span> - {category}
      </div>
      <div className="flex items-center gap-2 mx-10">
        <span className="text-green-500 font-bold">{status}</span>
        <span className="font-medium">{date}</span>
      </div>
      <div className="flex gap-3 mx-20">
        <Image
          src={imagePlaintiff}
          alt="Imagem do demandante"
          className="max-w-[28px]"
          title="Demandante - João Silva"
        />
        <Image
          src={imageCollaborator}
          alt="Imagem do demandante"
          className="max-w-[28px]"
          title="Colaborador - Maria Clara"
        />
      </div>
      <div className="flex gap-3">
        <div className="flex">
          <Clock size={24} color="#2AC856" />
          <span>8 horas</span>
        </div>
        <div className="flex">
          <Clock size={24} weight="fill" color="#2AC856" />
          <span>12 horas</span>
        </div>
      </div>
    </div>
  );
};

export default taskList;
