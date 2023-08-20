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
  plaintiff: string;
  imagePlaintiff: any;
  collaborator: string;
  imageCollaborator: any;
}

const task: React.FC<Props> = ({
  src,
  alt,
  name,
  title,
  status,
  date,
  category,
  plaintiff,
  imagePlaintiff,
  collaborator,
  imageCollaborator,
}) => {
  return (
    <div className="font-inter flex gap-2 p-5 rounded-2xl bg-zinc-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300 text-[#545454]">
      <div className="flex - flex-col justify-center items-center">
        <Image src={src} alt={alt} className="w-16" />
        <h3 className="font-medium mt-2">{name}</h3>
      </div>
      <div className="flex flex-col ml-4">
        <div className="flex gap-16">
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <span className="text-sm">{category}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-green-500 font-bold">{status}</span>
            <span className="font-medium">{date}</span>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-5">
          <div className="flex gap-3">
            <p>Demandante</p>
            <div className="flex items-center gap-1">
              <Image
                src={imagePlaintiff}
                alt="Imagem do demandante"
                className="max-w-[28px]"
              />
              <p className="text-[#2AC856]">{plaintiff}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <p>Colaborador</p>
            <div className="flex items-center gap-1">
              <Image
                src={imageCollaborator}
                alt="Imagem do demandante"
                className="max-w-[28px]"
              />
              <p className="text-[#2AC856]">{collaborator}</p>
            </div>
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
      </div>
    </div>
  );
};

export default task;
