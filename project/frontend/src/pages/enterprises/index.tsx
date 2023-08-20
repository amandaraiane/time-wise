import Navbar from "@/components/Navbar";
import React from "react";
import { useState } from "react";

import CompanyInfo from "@/components/Company";

import logoCompany from "../../../public/logo-company.png";
import { Plus } from "@phosphor-icons/react";

// import { Container } from './styles';

const Company: React.FC = () => {
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
        colorFour={"#1818"}
        colorFive={"#545454"}
      ></Navbar>

      <main className="p-20 flex flex-1 flex-col ml-[330px]">
        <header className="flex justify-between items-center max-w-4xl mb-14">
          <h1 className="font-bold text-[32px] text-zinc-600">Empresas</h1>
          <button
            onClick={displayModal}
            className="text-zinc-100 bg-green-500 rounded-2xl flex items-center gap-1 p-3 hover:bg-opacity-80 transition-all shadow-md"
          >
            nova empresa <Plus size={20} weight="bold" />
          </button>
        </header>
        <div className="flex gap-16 flex-wrap max-w-4xl">
          <CompanyInfo src={logoCompany} alt="Logo da empresa" name="Cubo" />
          <CompanyInfo src={logoCompany} alt="Logo da empresa" name="Cubo" />
          <CompanyInfo src={logoCompany} alt="Logo da empresa" name="Cubo" />
          <CompanyInfo src={logoCompany} alt="Logo da empresa" name="Cubo" />
          <CompanyInfo src={logoCompany} alt="Logo da empresa" name="Cubo" />
        </div>
      </main>
      {showModal && (
        <div className="absolute w-full h-full bg-black/30 flex justify-center items-center">
          <div className="bg-white lg:w-[600px] p-11 rounded-2xl space-y-10">
            <div className="flex text-[#545454] justify-between items-center">
              <h2 className="text-lg font-bold">Cadastrar empresa</h2>
              <button
                className="bg-zinc-200 w-6 h-6 rounded-full hover:bg-zinc-300 transition-all"
                onClick={displayModal}
              >
                X
              </button>
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
            </form>
            <button
              title="Fechar"
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

export default Company;
