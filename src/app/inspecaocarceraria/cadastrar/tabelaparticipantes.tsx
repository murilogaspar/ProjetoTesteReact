import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  export default function Participantes() {
    return (
      <>
        <h2 className="m-2 p-4 text-lg font-bold">Participantes da Inspeção</h2>

        <div className="flex items-center justify-center gap-4 mt-6">
            {/* Input de email */}
            <input
                type="email"
                placeholder="Email"
                className="w-[900px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Botão de upload de arquivo */}
            <label className="w-[200px] h-[50px] flex flex-col justify-center items-center px-4 py-3 bg-green-700 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-700">
            <span className="text-center"> Selecionar Arquivo</span>
            <input type="file" className="hidden" />
            </label>

            </div>

  
        <Table className="m-4">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
  
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
  
      </>
    );
  }
  