import { Button } from "@/components/ui/button";
import { mockUsers } from "./mockficha";
import NavPrincipalAssistido from "../navprincipal/page";


export default function Usuarioficha() {
  return (
    <div className="p-6 grid grid-cols-1 gap-6 w-400">
      {mockUsers.map((user) => (
        <div
          key={user.id}
          className="shadow-lg rounded-2xl p-6 border"
        >
          {/* Imagem + dados lado a lado */}
          <div className="flex gap-8 items-start">
            {/* Coluna da imagem */}
            <div className="flex-shrink-0">
              <img
                src="/icon/default_person4.jpg"
                alt="Ícone do usuário"
                className="w-32 h-40  object-cover"
              />
            </div>

            {/* Coluna 1: dados pessoais */}
            <div className="w-1/2 space-y-2">
              <div> <strong className="text-2xl">{user.nome}</strong></div>
              <div><strong>Nome Social:</strong> {user.nameSocial}</div>
              <div><strong>Data de Nascimento:</strong> {user.dataDeNascimento}</div>
              <div><strong>Gênero:</strong> {user.genero}</div>
              <div><strong>Filiação:</strong> {user.filiacao}</div>
              <Button className="bg-green-800">Editar</Button>
            </div>

            {/* Coluna 2: dados penais */}
            <div className="w-1/2 space-y-2">
              <div><strong>Infopen:</strong> {user.numeroInfopen}</div>
              <div><strong>Estabelecimento:</strong> {user.estabelecimentoPenal}</div>
              <div><strong>Situação de Custódia:</strong> {user.situacaoCustodia}</div>
              <div><strong>Situação Jurídica:</strong> {user.situacaoJuridica}</div>
              <div><strong>Regime de Custódia:</strong> {user.regimeCustodia}</div>
              <div><strong>Data de Última Prisão:</strong> {user.dataDaUltimaPrisao}</div>
              <Button className="bg-green-800">Relatório Penal</Button>
            </div>


             
             <div className="w-1/2 space-y-2">
              <h2 className="text-1xl">Processos de Conhecimento</h2>
              <h2 className="text-amber-400"> 10 </h2>
            </div>

            




          </div>
          
        </div>
      ))}

      <NavPrincipalAssistido />
    
    </div>
  );
}
