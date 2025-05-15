// Arquivo: dados.jsx

import { Label } from "@radix-ui/react-label";
import { dadosPreso } from "./mock/mockdados";

export function DadosDoPreso() {
  return (
    <div className="p-6 grid grid-cols-1 gap-6 ">
      {dadosPreso.map((user) => (
        <div key={user.id} className="shadow-lg rounded-2xl p-6 border ">
          <div className="flex flex-col gap-6 justify-items-center">
            <div>
              <h2 className=" text-lg font-bold mb-4">
                Informações Pessoais
              </h2>

              <div className="flex gap-8 items-start ">
                
                <div className="w-1/2 space-y-2">

                <Label htmlFor="nomecompleto"><strong> Nome Completo</strong></Label>
                <input id="nomecompleto" type="text" value={user.nomecompleto} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>

                <Label htmlFor="nomesocial"><strong> Nome Social </strong></Label>
                <input id="nomesocial" type="text" value={user.nomesocial} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>

                <Label htmlFor="profissao"><strong> Profissão </strong></Label>
                <input id="profissao" type="text" value={user.profissao} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>

                <Label htmlFor="datanascimento"><strong> Data de Nascimento </strong></Label>
                <input id="datanascimento" type="text" value={user.datanascimento} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>

                <Label htmlFor="estadocivil"><strong> Estado Civil </strong></Label>
                <input id="estadocivil" type="text" value={user.estadocivil} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>

                <Label htmlFor="registrocivil"><strong> Registro Civil </strong></Label>
                <input id="registrocivil" type="text" value={user.registrocivil} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>
  

                <Label htmlFor="nacionalidade"><strong> Nacionalidade </strong></Label>
                <input id="nacionalidade" type="text" value={user.nacionalidade} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>

                </div>

                
                <div className="w-1/2 space-y-2">
                <Label htmlFor="naturalidade"><strong>Naturalidade</strong></Label>
                <input id="naturalidade" type="text" value={user.naturalidade} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>

                <Label htmlFor="etnia"><strong>Etnia</strong></Label>
                <input id="etnia" type="text" value={user.etnia} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>
                  
                <Label htmlFor="necessidadeespeciais"><strong>Necessidade Especiais</strong></Label>
                <input id="necessidadeespeciais" type="text" value={user.necessidadeespeciais} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>
                  
                <Label htmlFor="genero"><strong>Gênero</strong></Label>
                <input id="genero" type="text" value={user.genero} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>
                
                <Label htmlFor="orientacaosexual"><strong> Orientação Sexual</strong></Label>
                <input id="orientacaosexual" type="text" value={user.orientacaosexual} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>
                 
                <Label htmlFor="identidadegenero"><strong>Identidade de Gênero</strong></Label>
                <input id="identidadegenero" type="text" value={user.identidadegenero} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>

                <Label htmlFor="tiposanguineo"><strong> Tipo Sangueneo</strong></Label>
                <input id="tiposanguineo" type="text" value={user.tiposanguineo} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>
                  
                 
                
                </div>
              </div>
            </div>



            
            <div>
              <h2 className="text-lg font-bold mb-4">
                Ficha de Identificação Processual
              </h2>

              <div className="flex gap-8 items-start">
               <div className="w-1/2 space-y-2"> 
                  <Label htmlFor="establecimento"><strong>Estabelecimento</strong></Label>
                  <input id="estabelecimento" type="text" value={user.estabelecimento} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>
                  
                  <Label htmlFor="vara"><strong>Vara</strong></Label>
                  <input id="vara" type="text" value={user.vara} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>
                  
                  <Label htmlFor="fraseprocessual"><strong>Fase Processual</strong></Label>
                  <input id="fraseprocessual" type="text" value={user.faseprocessual} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>
                </div>
              
              <div className="w-1/2 space-y-2">
                 <Label htmlFor="tipopena"><strong>Tipo Penal</strong></Label>
                  <input id="tipopena" type="text" value={user.tipopena} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>


                  <Label htmlFor="datafato"><strong>Data do Fato</strong></Label>
                  <input id="datafato" type="text" value={user.datafato} readOnly className="border rounded px-2 py-1 w-full bg-gray-100"/>

                </div>
              
              </div>

            </div>
          </div>





        </div>
      ))}
    </div>
  );
}
