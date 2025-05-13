'use client';

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";


export default function NavPrincipalAssistido() {
  const router = useRouter();

  return (
    <div className="shadow-lg rounded-2xl p-4 border bg-gray-100">
      <div className=" flex  gap-4 flex-wrap">
      <div className="flex justify-start items-center gap-x-4">
        <Button
          className="bg-green-900 text-white"
          onClick={() => router.push("/assistido/navprincipal/historico")}
        >
          Histórico
        </Button>
      </div>

      <div className="flex justify-start items-center gap-x-4">
        <Button
          className="bg-green-900 text-white"
          onClick={() => router.push("/assistido/navprincipal/processos")}
        >
          Processos
        </Button>
      </div>

      <div className="flex justify-start items-center gap-x-4">
        <Button
          className="bg-green-900 text-white"
          onClick={() => router.push("/assistido/navprincipal/historico")}
        >
          Visitas
        </Button>
      </div>

      <div className="flex justify-start items-center gap-x-4">
        <Button
          className="bg-green-900 text-white"
          onClick={() => router.push("/assistido/navprincipal/historico")}
        >
          Dados do Preso
        </Button>
      </div>

      <div className="ml-auto flex items-center gap-2">

        <h2 className="font-medium text-black">Processual</h2>

        <div className="w-5 h-5 bg-blue-800 rounded-full"></div>

        <h2 className="font-medium text-black">Interno</h2>

        <div className="w-5 h-5 bg-amber-600 rounded-full"></div>

      </div>

      </div>

    </div>
    
  );
}
