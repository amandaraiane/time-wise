import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

import { PencilSimple } from "@phosphor-icons/react";

import GroupInfo from "@/components/Groups";
import logoGroup from "../../../public/logo-grupo.png";
// import { Container } from './styles';

const Groups: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  function displayModal() {
    setShowModal(!showModal);
  }
  return (
    <div className="flex font-inter">
      <Navbar
        colorOne={"#545454"}
        colorTwo={"#545454"}
        colorThree={"#545454"}
        colorFour={"#545454"}
        colorFive={"#1818"}
      ></Navbar>
      <main className="p-20 flex flex-1 flex-col ml-[330px]">
        <header className="flex justify-between items-center lg:min-w-[1200px] mb-14">
          <h1 className="font-bold text-[32px] text-zinc-600">Grupo</h1>
          <button
            onClick={displayModal}
            className="text-zinc-100 bg-green-500 rounded-2xl flex items-center gap-1 p-3 hover:bg-opacity-80 transition-all shadow-md"
          >
            editar <PencilSimple size={20} />
          </button>
        </header>
        <div className="flex gap-16 flex-wrap max-w-4xl">
          <GroupInfo src={logoGroup} alt="Logo da empresa" name="Mega" />
        </div>
      </main>

      {showModal && (
        <div className="absolute w-full h-full bg-black/30 flex justify-center items-center">
          <div className="bg-white lg:w-[600px] p-11 rounded-2xl space-y-10">
            <div className="flex text-[#545454] justify-between items-center">
              <h2 className="text-lg font-bold">Editar Grupo</h2>
              <button className="bg-zinc-200 w-6 h-6 rounded-full hover:bg-zinc-300 transition-all" onClick={displayModal}>X</button>
            </div>
            <form action="" className="flex flex-col bg-white gap-5">
              <input
                type="text"
                placeholder="Nome"
                className="border-b border-b-zinc-300 mb-2 p-1"
              />
              <input
                type="text"
                placeholder="CNPJ"
                className="border-b border-b-zinc-300 mb-2 p-1"
              />
              <input
                type="text"
                placeholder="Empresas"
                className="border-b border-b-zinc-300 mb-2 p-1"
              />
              <input
                type="number"
                placeholder="Colaboradores"
                className="border-b border-b-zinc-300 mb-2 p-1"
              />
            </form>
            <button
              onClick={displayModal}
              className="text-zinc-100 bg-green-500 rounded-2xl flex items-center gap-1 p-3 hover:bg-opacity-80 transition-all shadow-md w-20 justify-center"
            >
              salvar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Groups;
