"use client"

import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { UsersAssistido } from "../interface/user";
import { DataTableAssistido } from "./datatable";

interface Props {
  users: UsersAssistido[];
}

export default function UsersDatatableassistido({ users }: Props) {
  const router = useRouter();

  const columns: ColumnDef<UsersAssistido>[] = [
    {
      accessorKey: "id",
      cell: ({ row }) => <div>{row.getValue("id")}</div>,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          E-mail
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div>{row.getValue("email")}</div>,
    },
    {
      accessorKey: "company.name",
      id: "companyName",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Company Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div>{row.getValue("companyName")}</div>,
    },
    {
      id: "actions",
      header: "Ação",
      cell: ({ }) => (
        <Button
          className="bg-green-900 text-white"
          onClick={() => router.push("/assistido/fichaassistido")}
        >
          Cadastrar Defensoria
        </Button>
      ),
    },
  ];

  return (
    <DataTableAssistido
      columns={columns}
      data={users}
      pageSize={4}
      searchFields={["id", "name", "username", "email", "company.name"]}
    />
  );
}
