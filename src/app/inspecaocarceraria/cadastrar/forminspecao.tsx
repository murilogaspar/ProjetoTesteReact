"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Participantes from "./tabelaparticipantes";
import { Button } from "@/components/ui/button";


import { useRouter } from 'next/navigation'





export default function SelectionInspecao() {
  const router = useRouter()
  
  return (
    
    
      <div className="  bg-gray-200 dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg">
        <h2 className="uppercase font-bold mb-6 text-lg sm:text-xl">
          Local e Data de Inspeção
        </h2>

        <div className="flex flex-col gap-4">
          {/* Select 1 - Data */}
          <Select>
            <SelectTrigger className="w-full sm:w-[600px] h-[50px]">
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
            <SelectTrigger className="w-full sm:w-[600px] h-[50px]">
              <SelectValue placeholder="Selecione o Local de Inspeção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sala-1">Sala 1</SelectItem>
              <SelectItem value="sala-2">Sala 2</SelectItem>
              <SelectItem value="sala-3">Sala 3</SelectItem>
            </SelectContent>
          </Select>


           {/* Botão de upload */}
        <div className="mt-6 flex justify-start">
          <label className="w-[200px] h-[40px] flex justify-center items-center px-4 py-3 bg-green-700 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-700">
            <span>Selecionar Arquivo</span>
            <input type="file" className="hidden" />
          </label>
        </div>

        <Participantes />

         <div className="flex flex-wrap justify-start gap-6">
            <Button 
              type="submit" 
              className="w-full lg:w-[8.6rem] lg:h-[2.5rem] font-bold tracking-wide bg-[#487348] text-white hover:bg-[#253f25] md:w-fit"
          >
              Cadastrar
            </Button>

            <Button 
                type="button" 
                className="w-full lg:w-[8.6rem] lg:h-[2.5rem] font-bold tracking-wide bg-[#d1cece] text-black hover:bg-[#253f25] text-green-800 md:w-fit"
                onClick={() => router.back()}
              >
                
              Voltar
            </Button>
          </div>

        </div>

        
      </div>
   
  );
}
