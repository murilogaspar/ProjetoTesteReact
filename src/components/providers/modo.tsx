"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Define o componente ModeToggle, que permite trocar o tema
export function ModeToggle() {
    
    // Hook para mudar o tema atual ('light', 'dark' ou 'system')
    const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      
      
      {/* O botão que abre o dropdown 
      com asChild, ele não renderiza a tag padrão (tipo button ou div), 
      e sim usa diretamente o elemento filho que você passou*/}
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
           
           {/* Ícone do Sol: visível no modo claro */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
           
          {/* Ícone da Lua: visível no modo escuro */}
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        
        {/* Opção: tema claro */}
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Claro
        </DropdownMenuItem>
        
         {/* Opção: tema escuro */}
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Escuro
        </DropdownMenuItem>

        {/* Opção: seguir o tema do sistema operacional */}
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
