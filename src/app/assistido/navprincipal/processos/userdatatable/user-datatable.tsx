"use client"

import { ColumnDef } from "@tanstack/react-table";


import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { UsersAssistido } from "../interface/user";
import { DataTableassistido } from "./datatable";


//essa é minha tabela onde coloco os campos
export const columns: ColumnDef<UsersAssistido>[] = [
    {
      
        accessorKey:"processo", 
        //header:"ID",

        cell:({row}) => {
            return <div>{row.getValue("processo")}</div>
        }
    },

    {
        accessorKey:"comarca",
        //header:"Name",

        // função para ordenar em ordem crescent    
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"

                 
                
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Comarca 
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },

        cell:({row}) => {
            return <div>{row.getValue("comarca")}</div>
        }
    },

    {
        accessorKey:"vara",
        //header:"Email",

        // função para ordenar em ordem crescent
        header: ({ column }) => {
            return (
              <Button 
                variant="ghost"
                
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Vara
                <ArrowUpDown className="ml-2 h-4 w-4 " />
              </Button>
            )
          },
        
        
        cell:({row}) => {
            return <div>{row.getValue("vara")}</div>
        }
    },

    {
        accessorKey:"area",
        //header:"Email",

        // função para ordenar em ordem crescent
        header: ({ column }) => {
            return (
              <Button 
                variant="ghost"
                
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Área
                <ArrowUpDown className="ml-2 h-4 w-4 " />
              </Button>
            )
          },
        
        
        cell:({row}) => {
            return <div>{row.getValue("area")}</div>
        }
    },

    {
        accessorKey:"classe",
        //header:"Email",

        // função para ordenar em ordem crescent
        header: ({ column }) => {
            return (
              <Button 
                variant="ghost"
                
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Classe
                <ArrowUpDown className="ml-2 h-4 w-4 " />
              </Button>
            )
          },
        
        
        cell:({row}) => {
            return <div>{row.getValue("classe")}</div>
        }
    },
 
];


interface Props {
    users: UsersAssistido [];
}


// aqui é onde eu insiro os dados , pageSize quantas linhas eu determino na tabela
export default function UsersDatatableassistido({users}:Props){
    return  <DataTableassistido 
  
     columns={columns} 
  
     data={users}  
  
     pageSize={4} 
  
     searchFields={["processo", "comarca", "vara", "area", "classe"]}
    
    
    
    />
  
}
