import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"


  import { Table as ReactTable } from "@tanstack/react-table"


  // aceita qualquer tipo de dado 
  type PaginationDemoProps<TData> = {
  table: ReactTable<TData>;
};

  // é o tipo de props que o componente recebe, {table} está pegando a table dentro da props 
  export function PaginationDemo<TData>({table}:PaginationDemoProps<TData>) {
    /* 
    
    Pega o índice da página atual no estado da tabela, 
    
    soma 1, para representar isso como um número de página "normal".
    
    salva esse valor na constante currentPage, 
    
    que geralmente é usada para destacar a página atual na paginação. */
    
    const currentPage = table.getState().pagination.pageIndex + 1;

    // Retorna quantas páginas no total sua tabela tem, com base no número de dados e pageSize

    const totalPages = table.getPageCount();


    // aqui o limite de página visiveis são 5 
    const visiblePages = Array.from({length:totalPages},(_,i) => i + 1).slice(0, 5);


    return (
      <Pagination className="justify-end items-center gap-x-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#"          
       
              onClick={(e) => {
                e.preventDefault();
                table.previousPage();
              }}
              className={!table.getCanPreviousPage() ? "pointer-events-none opacity-50" : ""}   
            />

            
          </PaginationItem>

          
        
           {visiblePages.map((page) => (
            /*criar um botão por número de página(visiblePages), 
                
            PaginationLink	É o botão clicável
                
                isActive={page === currentPage}	Destaca a página atual

                onClick	Atualiza a tabela para ir à página escolhida*/ 
            
            <PaginationItem key={page}>
            <PaginationLink 
            
                href="#"

              isActive={page === currentPage}
              onClick={(e) => {
                e.preventDefault();
                table.setPageIndex(page - 1);
              }}
            >
              {page}


            </PaginationLink>
          </PaginationItem>
          ))}

          {totalPages > 5 && (<PaginationItem><PaginationEllipsis /></PaginationItem>
        )}

          
          <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              table.nextPage();
            }}
            className={!table.getCanNextPage() ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
         
        </PaginationContent>
      </Pagination>
    )
  }
  