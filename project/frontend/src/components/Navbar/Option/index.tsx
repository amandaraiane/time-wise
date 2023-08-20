import Link from "next/link";
import React from "react";

// import { Container } from './styles';

interface Props {
  icon: any;
  name: string;
  color: string;
  src: string;
  id: string;
}

const option: React.FC<Props> = ({ icon, name, color, src, id }) => {
  return (
    <Link
      className={`flex flex-row space-x-[10px] items-center p-[8px] ${
        color == "#1818" ? "text-[#1818]" : "text-[#545454]"
      } hover:bg-zinc-200 rounded-[15px] duration-500  font-semibold`}
      id={id}
      href={src}
    >
      <div>{icon}</div>
      <span className={` `}>{name}</span>
    </Link>
  );
};

export default option;
