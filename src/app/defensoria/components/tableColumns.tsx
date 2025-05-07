import { ColumnDef } from "@tanstack/react-table";


interface TableColumnsProps {
	deleteDefenderOffice: (id: number) => void;
	redirectToEditDefenderOffice: (id: number) => void;
}

export function tableColumns({
	deleteDefenderOffice,
	redirectToEditDefenderOffice,
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
			cell: (cell) => {
				return (
					<div className="flex justify-center text-center gap-8">
						<Button
							className="size-[2.5rem] bg-[#487348] hover:bg-[#304e30] text-white"
							onClick={() =>
								redirectToEditDefenderOffice(cell.row.original?.id || 0)
							}
						>
							<Pencil />
						</Button>
						<Dialog
							buttonTitle={<Trash2 />}
							title="Remover Defensoria"
							description="Deseja realmente remover a defensoria ?"
							className="size-[2.5rem] bg-[#B80E0E] text-white hover:bg-[#dd4040]"
							dialogClassName="md:min-w-[50rem] lg:min-w-[60rem] w-full overflow-auto max-w-[30rem]"
							buttonActionTitle="Remover Defensoria"
							onClose={() => deleteDefenderOffice(cell.row.original?.id || 0)}
							buttonSubmitClassname="w-full max-w-[15rem] h-[2.5rem] bg-[#B80E0E] text-white hover:bg-[#dd4040]"
						>
							<RemoveContent
								title={`Remover a defensoria: ${cell.row.original?.nome}`}
								buttonTitle="Remover Defensoria"
							/>
						</Dialog>
					</div>
				);
			},
		},
	];
}
