
export default function Historico(){
    return(
        
<div className="shadow-lg rounded-2xl p-4 m-5 border bg-gray-100">
  <div className="flex">
    {/* Bloco Azul fixo */}
    <div className="bg-blue-800 text-white p-4 w-[200px] rounded-l-xl">
      <h2>Processo</h2>
      <h2>Data: 15/02/2024</h2>
      <h3>Hora: 20:51</h3>
    </div>

    {/* Bloco Branco preenchendo o resto */}
    <div className="bg-white text-black p-4 flex-1 rounded-r-xl border-l border-gray-300">
      <h2>Processo Eletrônico 6545646546</h2>
      <h2>Área: Criminal</h2>
      <h3>Classe: Execução Pena</h3>
      <h3>Movimento: 6566561156</h3>
      <h3>Juntada de Petição - Ciência</h3>
    </div>
  </div>
</div>
      
    )
}