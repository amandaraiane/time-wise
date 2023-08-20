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
    <a className={`flex flex-row space-x-[10px] items-center ${color}`}>
      <div id={id}>{icon}</div>
      <div id={id}>{name}</div>
    </a>
  );
};

export default option;
