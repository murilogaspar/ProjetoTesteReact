import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Headerassistido() {
  return (
    <header className="w-full bg-[#D9D9D9] shadow-md z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-4 m-5">
        {/* Inputs e Select lado a lado */}
        <nav className="flex flex-row flex-wrap items-center gap-4">
          <Input
            className="bg-[#EFEFEF] w-[300]"
            type="text"
            placeholder="Nº do Infopen, Processo, CPF..."
          />
          <Input
            className="bg-[#EFEFEF] w-[300px]"
            type="text"
            placeholder="Nome da Mãe"
          />
          <Input
            className="bg-[#EFEFEF] w-[300px]"
            type="text"
            placeholder="Defensoria"
          />

          <Select>
            <SelectTrigger className="w-[300px] bg-[#EFEFEF]">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </nav>
      </div>
    </header>
  );
}
