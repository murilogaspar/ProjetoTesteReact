
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { Usersprocesso } from "../interface/userprocesso";
import { DataTableprocesso } from "./datatableprocesso";

    
export const columns: ColumnDef<Usersprocesso>[] = [

    {
        accessorKey:"id",

        cell:({row}) => {
            return <div>{row.getValue("id")}</div>
        }
    },

    {
        accessorKey:"processo",

        header: ({ column }) => {
            return (
              <Button
                variant="ghost"

                 
                
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Processo
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },

        cell:({row}) => {
            return <div>{row.getValue("processo")}</div>
        }
    },


    {
        accessorKey:"comarca",

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

        header: ({ column }) => {
            return (
              <Button
                variant="ghost"

                 
                
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Vara 
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },

        cell:({row}) => {
            return <div>{row.getValue("vara")}</div>
        }
    },


    {
        accessorKey:"area",

        header: ({ column }) => {
            return (
              <Button
                variant="ghost"

                 
                
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Área
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },

        cell:({row}) => {
            return <div>{row.getValue("area")}</div>
        }
    },
    
    {
        accessorKey:"classe",

        header: ({ column }) => {
            return (
              <Button
                variant="ghost"

                 
                
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Classe
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },

        cell:({row}) => {
            return <div>{row.getValue("classe")}</div>
        }
    },
];


interface Props {
    users: Usersprocesso [];
}

export default function UsersDatatableprocesso({users}:Props){
    return  <DataTableprocesso 
  
     columns={columns} 
  
     data={users}  
  
     pageSize={5} 
  
     searchFields={["id", "processo", "comarca", "vara", "area", "classe"]}
    
    
    
    />
  
}