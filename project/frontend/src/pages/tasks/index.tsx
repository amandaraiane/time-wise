import Navbar from "@/components/Navbar";
import React, { useState } from "react";

import TaskA from "@/components/Task";
import TaskList from "@/components/TaskList";
import logoCompany from "../../../public/logo-company.png";
import imagePlaintiff from "../../../public/demandante.png";
import imageCollaborator from "../../../public/colaborador.png";

import { Eye } from "@phosphor-icons/react";
// import { Container } from './styles';

const Task: React.FC = () => {
  const [visionList, setVisionList] = useState(false);
  function setVision() {
    setVisionList(!visionList);
    console.log(visionList);
  }

  return (
    <div className="flex font-inter">
      <Navbar
        colorOne={"#545454"}
        colorTwo={"#1818"}
        colorThree={"#545454"}
        colorFour={"#545454"}
        colorFive={"# "}
      ></Navbar>
      <main className="p-20 flex flex-1 flex-col ml-[330px]">
        <header className="flex justify-between items-center mb-14">
          <h1 className="font-bold text-[32px] text-zinc-600">Empresas</h1>
          <button
            onClick={setVision}
            className="text-zinc-100 bg-green-500 rounded-2xl flex items-center gap-1 p-3 hover:bg-opacity-80 transition-all shadow-md"
          >
            visão <Eye size={20} weight="bold" />
          </button>
        </header>

        {visionList && (
          <div className="space-y-6">
            <TaskList
              alt="Logo da empresa"
              src={logoCompany}
              name="Cubo"
              category="Demandada"
              title="Título da tarefa"
              status="em andamento"
              date="21/08/23"
              imageCollaborator={imageCollaborator}
              imagePlaintiff={imagePlaintiff}
            />
            <TaskList
              alt="Logo da empresa"
              src={logoCompany}
              name="Cubo"
              category="Demandada"
              title="Título da tarefa"
              status="em andamento"
              date="21/08/23"
              imageCollaborator={imageCollaborator}
              imagePlaintiff={imagePlaintiff}
            />
            <TaskList
              alt="Logo da empresa"
              src={logoCompany}
              name="Cubo"
              category="Demandada"
              title="Título da tarefa"
              status="em andamento"
              date="21/08/23"
              imageCollaborator={imageCollaborator}
              imagePlaintiff={imagePlaintiff}
            />
            <TaskList
              alt="Logo da empresa"
              src={logoCompany}
              name="Cubo"
              category="Demandada"
              title="Título da tarefa"
              status="em andamento"
              date="21/08/23"
              imageCollaborator={imageCollaborator}
              imagePlaintiff={imagePlaintiff}
            />
            <TaskList
              alt="Logo da empresa"
              src={logoCompany}
              name="Cubo"
              category="Demandada"
              title="Título da tarefa"
              status="em andamento"
              date="21/08/23"
              imageCollaborator={imageCollaborator}
              imagePlaintiff={imagePlaintiff}
            />
            <TaskList
              alt="Logo da empresa"
              src={logoCompany}
              name="Cubo"
              category="Demandada"
              title="Título da tarefa"
              status="em andamento"
              date="21/08/23"
              imageCollaborator={imageCollaborator}
              imagePlaintiff={imagePlaintiff}
            />
          </div>
        )}

        {!visionList && (
          <div className="flex flex-wrap gap-8">
            <TaskA
              alt="0"
              name="Cubo"
              src={logoCompany}
              title="Título da tarefa"
              status="em andamento"
              date="21/08/23"
              category="Demandada"
              plaintiff="João Silva"
              imagePlaintiff={imagePlaintiff}
              collaborator="Maria Clara"
              imageCollaborator={imageCollaborator}
            />
            <TaskA
              alt="0"
              name="Cubo"
              src={logoCompany}
              title="Título da tarefa"
              status="em andamento"
              date="21/08/23"
              category="Demandada"
              plaintiff="João Silva"
              imagePlaintiff={imagePlaintiff}
              collaborator="Maria Clara"
              imageCollaborator={imageCollaborator}
            />{" "}
            <TaskA
              alt="0"
              name="Cubo"
              src={logoCompany}
              title="Título da tarefa"
              status="em andamento"
              date="21/08/23"
              category="Demandada"
              plaintiff="João Silva"
              imagePlaintiff={imagePlaintiff}
              collaborator="Maria Clara"
              imageCollaborator={imageCollaborator}
            />
            <TaskA
              alt="0"
              name="Cubo"
              src={logoCompany}
              title="Título da tarefa"
              status="em andamento"
              date="21/08/23"
              category="Demandada"
              plaintiff="João Silva"
              imagePlaintiff={imagePlaintiff}
              collaborator="Maria Clara"
              imageCollaborator={imageCollaborator}
            />
            <TaskA
              alt="0"
              name="Cubo"
              src={logoCompany}
              title="Título da tarefa"
              status="em andamento"
              date="21/08/23"
              category="Demandada"
              plaintiff="João Silva"
              imagePlaintiff={imagePlaintiff}
              collaborator="Maria Clara"
              imageCollaborator={imageCollaborator}
            />
            <TaskA
              alt="0"
              name="Cubo"
              src={logoCompany}
              title="Título da tarefa"
              status="em andamento"
              date="21/08/23"
              category="Demandada"
              plaintiff="João Silva"
              imagePlaintiff={imagePlaintiff}
              collaborator="Maria Clara"
              imageCollaborator={imageCollaborator}
            />
          </div>
        )}
      </main>
    </div>
  );
};
export default Task;
