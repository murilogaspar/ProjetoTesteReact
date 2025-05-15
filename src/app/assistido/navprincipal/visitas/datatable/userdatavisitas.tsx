
import { ColumnDef } from "@tanstack/react-table";
import { Usersvisitas } from "../interface/uservisitas";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { DataTablevisitas } from "./datatablevisitas";

    
export const columns: ColumnDef<Usersvisitas>[] = [

    {
        accessorKey:"id",

        cell:({row}) => {
            return <div>{row.getValue("id")}</div>
        }
    },

    {
        accessorKey:"local",

        header: ({ column }) => {
            return (
              <Button
                variant="ghost"

                 
                
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Local 
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },

        cell:({row}) => {
            return <div>{row.getValue("local")}</div>
        }
    },


    {
        accessorKey:"datavisita",

        header: ({ column }) => {
            return (
              <Button
                variant="ghost"

                 
                
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Data Visita 
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },

        cell:({row}) => {
            return <div>{row.getValue("datavisita")}</div>
        }
    },


    {
        accessorKey:"tipo",

        header: ({ column }) => {
            return (
              <Button
                variant="ghost"

                 
                
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Tipo 
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },

        cell:({row}) => {
            return <div>{row.getValue("tipo")}</div>
        }
    },


    {
        accessorKey:"defensoria",

        header: ({ column }) => {
            return (
              <Button
                variant="ghost"

                 
                
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Defensoria
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },

        cell:({row}) => {
            return <div>{row.getValue("defensoria")}</div>
        }
    },
];


interface Props {
    users: Usersvisitas [];
}

export default function UsersDatatablevisitas({users}:Props){
    return  <DataTablevisitas 
  
     columns={columns} 
  
     data={users}  
  
     pageSize={5} 
  
     searchFields={["id", "local", "datavisitas", "tipo", "defensoria"]}
    
    
    
    />
  
}