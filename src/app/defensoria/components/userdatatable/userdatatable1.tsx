"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Defensoria } from "../interface/user";
import { DataTabledefensoria } from "./datatable1";
import { Button } from "@/components/ui/button";
import router from "next/router";



export const columns: ColumnDef<Defensoria>[] =
	
	[
		{
			accessorKey: "codigo",
			header: () => {
				return <div className="flex justify-center text-center">Código</div>;
			},
			cell: (cell) => (
				<div className="flex justify-center text-center">
					{cell.row.original?.codigo}
				</div>
			),
		},

		{
			accessorKey: "nome",
			header: () => {
				return <div className="flex justify-center text-center">Nome</div>;
			},
			cell: (cell) => (
				<div className="flex justify-center text-center">
					{cell.row.original?.name}
				</div>
			),
		},

		{
			accessorKey: "Area de Atuação",
			header: () => {
				return <div className="flex justify-center text-center"> Área de Atuação </div>;
			},
			cell: (cell) => (
				<div className="flex justify-center text-center">
					{cell.row.original?.areaDeAtuacao}
				</div>
			),
		},

		{
			accessorKey: "Comarca",
			header: () => {
				return <div className="flex justify-center text-center"> Comarca </div>;
			},
			cell: (cell) => (
				<div className="flex justify-center text-center">
					{cell.row.original?.comarca}
				</div>
			),
		},
		

		{
			accessorKey: "actions",
			header: () => {
				return <div className="flex justify-center text-center">Ações</div>;
			},
		
			cell: () => (
			
				<div className="flex justify-center gap-2">
				<Button className="bg-[#487348] " onClick={() => router.push("")}>
				  Editar
				</Button>
				<Button className="bg-red-700 " onClick={() => router.push("")}>
				  Excluir
				</Button>
			  </div>
			),
		},

		  
		  
	];
		interface Props {
			users: Defensoria [];
		}

 
		// aqui é onde eu insiro os dados , pageSize quantas linhas eu determino na tabela
		export default function UsersDatatabledefensoria({users}:Props){
			return  <DataTabledefensoria 

			columns={columns} 
  
			data={users}  
		 
			pageSize={4} 
		 
			searchFields={["codigo", "nome","areaDeAtuacao","comarca", "actions"]}
			
			/>
		
		}
