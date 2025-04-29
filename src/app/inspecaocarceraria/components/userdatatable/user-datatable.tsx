"use client"

import { ColumnDef } from "@tanstack/react-table";


import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { Usersinspecao } from "../interface/user";
import { DataTableinspecao } from "./datatable";



//essa é minha tabela onde coloco os campos
export const columns: ColumnDef<Usersinspecao>[] = [
    {
      
        accessorKey:"id", 
        //header:"ID",

        cell:({row}) => {
            return <div>{row.getValue("id")}</div>
        }
    },

    {
        accessorKey:"name",
        //header:"Name",

        // função para ordenar em ordem crescent    
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"

                 
                
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Name 
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },

        cell:({row}) => {
            return <div>{row.getValue("name")}</div>
        }
    },

    {
        accessorKey:"email",
        //header:"Email",

        // função para ordenar em ordem crescent
        header: ({ column }) => {
            return (
              <Button 
                variant="ghost"
                
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                E-mail
                <ArrowUpDown className="ml-2 h-4 w-4 " />
              </Button>
            )
          },
        
        
        cell:({row}) => {
            return <div>{row.getValue("email")}</div>
        }
    },

    {
        accessorKey:"company.name",
        id:"companyName",
        //header:"Company",

        // função para ordenar em ordem crescent
        header: ({ column }) => {
          
            return (
              <Button
                variant="ghost"

                
                
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                
              >
                Comany Name
                <ArrowUpDown className="ml-2 h-4 w-4 " />
              </Button>
            )
          },

        cell: ({ row }) => {
            return <div>{row.getValue("companyName")}</div>;
          },
    },
 
];


interface Props {
    users: Usersinspecao [];
}


// aqui é onde eu insiro os dados , pageSize quantas linhas eu determino na tabela
export default function UsersDatatableservidor({users}:Props){
    return  <DataTableinspecao 
  
     columns={columns} 
  
     data={users}  
  
     pageSize={4} 
  
     searchFields={["id", "name", "username", "email", "company.name"]}
    
    
    
    />
  
}
