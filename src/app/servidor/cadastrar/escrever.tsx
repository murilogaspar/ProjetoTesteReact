"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FormularioServidor() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nome, email });
    alert("Defensoria cadastrada!");
    router.push("/servidor"); // volta para a listagem
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Cadastrar Defensoria</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-gray-700">Nome da Defensoria</label>
          <Input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            placeholder="Digite o nome" 
            required 
          />
        </div>

        <div>
          <label className="block text-gray-700">E-mail</label>
          <Input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Digite o e-mail" 
            required 
          />
        </div>

        <Button type="submit" className="w-full bg-green-900 text-white">
          Cadastrar
        </Button>

      </form>
    </div>
  );
}
