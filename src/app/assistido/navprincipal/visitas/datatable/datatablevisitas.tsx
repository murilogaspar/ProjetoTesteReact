"use client"

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface DataTablevisitasProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  pageSize?: number
  searchFields?: string[]
}

export function DataTablevisitas<TData, TValue>({
  columns,
  data,
  pageSize = 5,
  searchFields = [],
}: DataTablevisitasProps<TData, TValue>) {
  const [globalFilter, setGlobalFilter] = useState("")

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row, columnId, filterValue) => {
      if (!searchFields.length) return true
      return searchFields.some((field) =>
        String(row.getValue(field)).toLowerCase().includes(filterValue.toLowerCase())
      )
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize,
      },
    },
  })

  return (
    <div className="space-y-2 w-10xl">

      <div className="rounded-md border overflow-x-auto">
  <Table className="bg-gray-200 ">
  <TableHeader>
  {table.getHeaderGroups().map((headerGroup) => (
    <TableRow key={headerGroup.id}>
      {headerGroup.headers.map((header) => (
        <TableHead
          key={header.id}
          className="text-center text-gray-700 px-4 py-2 font-semibold"
        >
          {header.isPlaceholder
            ? null
            : flexRender(
                header.column.columnDef.header,
                header.getContext()
              )}
        </TableHead>
      ))}
    </TableRow>
  ))}
</TableHeader>

<TableBody>
  {table.getRowModel().rows?.length ? (
    table.getRowModel().rows.map((row) => (
      <TableRow key={row.id} className="hover:bg-gray-100">
        {row.getVisibleCells().map((cell) => (
          <TableCell
            key={cell.id}
            className="px-4 py-2 text-center text-sm text-gray-900"
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell
        colSpan={columns.length}
        className="h-24 text-center text-gray-600"
      >
        Nenhum resultado encontrado.
      </TableCell>
    </TableRow>
  )}
</TableBody>
  </Table>
</div>

      <div className="flex items-center justify-between space-x-2">
        <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Anterior
        </Button>
        <span className="text-sm">
          Página {table.getState().pagination.pageIndex + 1} de{" "}
          {table.getPageCount()}
        </span>
        <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Próxima
        </Button>
      </div>
    </div>
  )
}
