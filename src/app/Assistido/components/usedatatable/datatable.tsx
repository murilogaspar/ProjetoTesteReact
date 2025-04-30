"use client"

import * as React from "react"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  useReactTable,
  getFilteredRowModel,
  

} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import { PaginationDemo } from "@/components/ui/paginacao"
import Headerassistido from "../header/headerassistido"



//import router from "next/router"
//import { Button } from "./button"
//import { Input } from "./input"
//import { Button } from "./button"
//import { PaginationDemo } from "./paginacao"
//import Link from "next/link"
//import { Link } from "react-router-dom"



interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  //colocando na interface a paginação
  pageSize?:number;
  
  // pra filtrar
  searchFields?:string[];

}


export function DataTableAssistido<TData, TValue>({
  columns,

  data,
  // é o limite de paginação
  pageSize = 10,

 

}: DataTableProps<TData, TValue>): React.JSX.Element {
   
  

  //aqui cria a paginação  
  const [sorting, setSorting] = React.useState<SortingState>([]);

  

  const table = useReactTable({
    data,
    columns,
       
    getCoreRowModel: getCoreRowModel(),
    
    getPaginationRowModel: getPaginationRowModel(),
    
    onSortingChange: setSorting,

    getSortedRowModel: getSortedRowModel(),
  
    getFilteredRowModel: getFilteredRowModel(),

  
    state:{
        
      // faz a ordenação
        sorting, 
    },

    // pagina inicial
    initialState: {
        pagination:{
            pageSize,
        },
    },

  });

  return (

    
    <div className="w-400">

    <Headerassistido />

      
      <div className="flex flex-wrap justify-between items-center">
      
      <a className=" text-[24px] font-sans font-bold"> Buscar Assistido  </a>
      
       
       </div>

      
      <div className="flex items-center justify-between py-4 ">
      <div className=" w-full ">
        <Input
          placeholder="Buscar por qualquer campo..."
          value={(table.getState().globalFilter as string) ?? ""}
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          className="w-full  "
        />
        
      </div>
     
      </div>
   
   <div className="w-full">
    
      <Table className= "">
        <TableHeader className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow  key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        
      </Table>

      </div>
          
           
      
      <PaginationDemo table={table} />
      
    </div>
    
    
  )
}
