"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { z } from "zod";
import { useDefensoriaTableViewModel } from "./use-defensoria-table-viewmodel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export const schema = z.object({
	page: z.coerce.number().default(1),
	size: z.coerce.number().optional(),
	sort: z.string().optional(),
});

export function TableContent() {
	const searchParams = useSearchParams();
	const queryParams = schema.parse(Object.fromEntries(searchParams));
	const page = queryParams.page || 1;
	const size = queryParams.size ?? 10;
	const [search, setSearch] = useState<string>();

	const { defensoriasTable, totalItems, filterFields, isLoading } =
		useDefensoriaTableViewModel({ limit: size, currentPage: page, search });

	const debouncedSetSearch = useMemo(() => debounce(setSearch, 500), []);
	const router = useRouter();

	return (
		<div className="flex flex-col gap-5">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">
					Buscar Defensorias ({totalItems || 0})
				</h2>
				<Button
					className="w-60 h-10 font-bold bg-[#487348] hover:bg-[#2c462c] dark:hover:bg-[#2c462c] text-white -tracking-tight"
					onClick={() => router.push("/defensorias/cadastrar")}
				>
					Cadastrar Defensoria 
				</Button>
			</div>

			<Input
				placeholder="Busca por nome defensoria ou comarca ...."
				className="bg-[#EFEFEF] dark:bg-[#1A1A1A] w-full"
				onChange={(e) => debouncedSetSearch(e.target.value)}
			/>

			<DataTable
				table={defensoriasTable}
				filterFields={filterFields}
				footer={true}
				isLoading={isLoading}
			/>
		</div>
	);
}

export function DefensoriaTableView() {
	return <TableContent />;
}
function debounce(setSearch: Dispatch<SetStateAction<string | undefined>>, arg1: number): any {
    throw new Error("Function not implemented.");
}

