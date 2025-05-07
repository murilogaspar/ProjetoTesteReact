import { ColumnDef } from "@tanstack/react-table";
import { Defensoria } from "../interface/user";

interface TableColumnsProps {
	deleteDefenderOffice: (id: number) => void;
	redirectToEditDefenderOffice: (id: number) => void;
}

export function tableColumns({
	//deleteDefenderOffice,
	//redirectToEditDefenderOffice,
}: TableColumnsProps): ColumnDef<Defensoria | undefined>[] {
	return [
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
					{cell.row.original?.nome}
				</div>
			),
		},
		{
			accessorKey: "email",
			header: () => {
				return <div className="flex justify-center text-center">Email</div>;
			},
			cell: (cell) => (
				<div className="flex justify-center text-center">
					{cell.row.original?.email}
				</div>
			),
		},
		{
			accessorKey: "telefone",
			header: () => {
				return <div className="flex justify-center text-center">Contato</div>;
			},
			cell: (cell) => (
				<div className="flex justify-center text-center">
					{cell.row.original?.telefone}
				</div>
			),
		},
		{
			accessorKey: "actions",
			header: () => {
				return <div className="flex justify-center text-center">Ações</div>;
			},
		},
	];
}
