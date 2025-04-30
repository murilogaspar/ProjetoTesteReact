import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Trash } from "lucide-react";
import Modalcadastro from "./modalcadastroparticipante";


export default function Participantes() {
  return (
    <div className="flex flex-col ">
      <h2 className="mt-6 flex justify-start text-lg font-bold">Participantes da Inspeção</h2>

      {/* Linha de input e botão */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full max-w-5xl">
        <input
          type="name"
          placeholder="Pesquise um Nome"
          className="w-full sm:w-[600px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Modalcadastro />
      
        
      </div>

      {/* Tabela */}
      <div className="w-full max-w-5xl mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">
                <Button variant="destructive" size="icon">
                  <Trash className="w-5 h-5" />
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">
                <Button variant="destructive" size="icon">
                  <Trash className="w-5 h-5" />
                </Button>
              </TableCell>
            </TableRow>


          </TableBody>
        </Table>
      </div>
    </div>
  );
}
