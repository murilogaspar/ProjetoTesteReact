import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label" // Corrigido: `Label` vem de `@radix-ui/react-label`
import { useRouter } from 'next/navigation'

export default function Modalcadastro() {
    const router = useRouter()
  return (
    <Dialog>
     
      <DialogTrigger asChild>
        <Button className="w-full sm:w-[250px] h-[45px] bg-green-700 text-white rounded-lg shadow-md hover:bg-blue-700">
          Cadastrar Participantes
        </Button>
      </DialogTrigger>
     
      <DialogContent className="sm:max-w-[425px]">
        
        <DialogHeader>
          <DialogTitle> Cadastrar Participantes </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Digite o Nome
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
     
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Digite a Ocupação
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
     
        <DialogFooter className="flex justify-between gap-4">
           <Button type="submit" className="w-full sm:w-[250px] h-[45px] bg-green-700 text-white rounded-lg shadow-md hover:bg-blue-700">Cadastrar Participantes</Button>
           <Button type="button" onClick={() => router.back()} variant="outline">Voltar</Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}
