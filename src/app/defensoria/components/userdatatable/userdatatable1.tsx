"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Defensoria } from "../interface/user";
import { DataTabledefensoria } from "./datatable1";

import ButtonExcluir from "../../buttonexcluir/page";
import Buttoneditar from "../../buttoneditar/page";




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
				

				<Buttoneditar/>
				

				<ButtonExcluir />

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
