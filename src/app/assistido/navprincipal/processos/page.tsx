"use client"
import FichaPrincipal from "../../fichaassistido/page";
import { dadosprocessovisitas } from "./dadosprocessos";
import UsersDatatableprocesso from "./datatable/userdataprocesso";


export default function ProcessoAssistido() {
  return (
    <>
        <div>
        <FichaPrincipal />
      </div>
      <UsersDatatableprocesso users={dadosprocessovisitas} />
      
    </>
  );
}
