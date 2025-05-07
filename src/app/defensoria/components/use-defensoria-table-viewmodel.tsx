import { RoutePaths } from "@/constants/routes";
import { useDataTable } from "@/hooks/use-data-table";
import { TOAST_DEFAULT_DURATION, useToast } from "@/hooks/use-toast";
import {
	useDefensoriaDeleteMutation,
	useDefensoriaListQuery,
} from "@/lib/hooks";
import type { Defensoria } from "@/lib/livre-client/LivreAPI";
import type { DataTableFilterField } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { PaginatorUtils } from "../../../../../utils/pagination-utils";
import { tableColumns } from "./tableColumns";

export function useDefensoriaTableViewModel({
	search,
	limit,
	currentPage = 1,
}: { search?: string; limit: number; currentPage?: number }) {
	const { toast } = useToast();
	const router = useRouter();
	const { mutate: deleteDefensoria } = useDefensoriaDeleteMutation();
	// TODO: adição do loading quando estiver deletendo a defensoria

	const { data, error, isSuccess, isFetching, isRefetching, refetch } =
		useDefensoriaListQuery({
			search,
			limit,
			page: currentPage,
		});
	const totalItems = data?.page?.count || 0;
	const totalPages = PaginatorUtils.getPageNumber(
		data?.page?.count || 0,
		limit,
	);
	function handleRedirectToEditDefenderOffice(id: number) {
		router.push(RoutePaths.EDITAR_DEFENSORIA.replace("{id}", id.toString()));
	}

	async function handleDeleteDefenderOffice(id: number) {
		deleteDefensoria(
			{ id },
			{
				onSuccess(_data, _variables, _context) {
					toast({
						title: "Deletado com sucesso",
						duration: TOAST_DEFAULT_DURATION,
					});
					refetch();
				},
				onError(error, _variables, _context) {
					toast({
						title: error.errors[0].message,
						duration: TOAST_DEFAULT_DURATION,
					});
				},
			},
		);
	}

	const columns = useMemo(
		() =>
			tableColumns({
				deleteDefenderOffice: handleDeleteDefenderOffice,
				redirectToEditDefenderOffice: handleRedirectToEditDefenderOffice,
			}),
		[],
	);
	const filterFields: DataTableFilterField<Defensoria>[] = [];
	const defensorias = data?.results || [];

	const { table } = useDataTable({
		data: defensorias,
		columns: (columns as ColumnDef<Defensoria>[]) || [],
		pageCount: totalPages,
		rowCount: totalItems || 0,
		filterFields,
		defaultSize: limit,
	});

	const nextPageTable = () => {
		if (data?.page?.next) {
			table.setPagination((prev) => ({
				...prev,
				pageIndex: prev.pageIndex + 1,
			}));
		}
	};
	const previousPageTable = () => {
		if (data?.page?.previous) {
			table.setPagination((prev) => ({
				...prev,
				pageIndex: prev.pageIndex - 1,
			}));
		}
	};
	table.nextPage = nextPageTable;
	table.previousPage = previousPageTable;

	return {
		isLoading: isFetching || isRefetching,
		isSuccess,
		error,
		totalItems: totalItems || 0,
		defensoriasTable: table,
		filterFields,
	};
}
