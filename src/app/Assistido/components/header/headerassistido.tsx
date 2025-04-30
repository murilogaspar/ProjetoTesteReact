export default function Headerassistido(){
    return(
        <header className="w-full bg-[#487348] shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
         
          {/* Navegação */}
          <nav className="space-x-6">
            <a href="#" className="text-white hover:text-gray-200">Início</a>
            <a href="#" className="text-white hover:text-gray-200">Sobre</a>
            <a href="#" className="text-white hover:text-gray-200">Contato</a>
          </nav>
        </div>
      </header>
      

    )
}