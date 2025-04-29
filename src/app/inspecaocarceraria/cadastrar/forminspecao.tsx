"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Participantes from "./tabelaparticipantes";


export default function SelectionInspecao() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl bg-gray-200 dark:bg-gray-900 p-8 rounded-xl shadow-lg">
        <h2 className="uppercase font-bold mb-6">Local e Data de Inspeção</h2>

        <div className="flex flex-col gap-4 justify-center w-400">
          {/* Select 1 - Data */}
          <Select>
            <SelectTrigger className="w-[900px] h-[50px]">
              <SelectValue placeholder="Selecione a Data de Inspeção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025-05-01">01/05/2025</SelectItem>
              <SelectItem value="2025-05-02">02/05/2025</SelectItem>
              <SelectItem value="2025-05-03">03/05/2025</SelectItem>
            </SelectContent>
          </Select>

          {/* Select 2 - Local */}
          <Select>
            <SelectTrigger className="w-[900px] h-[50px]">
              <SelectValue placeholder="Selecione o Local de Inspeção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sala-1">Sala 1</SelectItem>
              <SelectItem value="sala-2">Sala 2</SelectItem>
              <SelectItem value="sala-3">Sala 3</SelectItem>
            </SelectContent>
          </Select>

            {/* Botão de upload de arquivo */}
            <label className="w-[200px] h-[50px] flex flex-col justify-center items-center px-4 py-3 bg-green-700 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-700">
            <span className="text-center"> Selecionar Arquivo</span>
            <input type="file" className="hidden" />
            </label>
        </div>
        
        <Participantes />
        
      </div>
    </div>
  );
}
