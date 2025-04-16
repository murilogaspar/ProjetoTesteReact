"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"

// Cria e exporta um componente chamado ThemeProvider que recebe os props do tipo ThemeProviderProps
export function ThemeProvider({
  
  children, // Os elementos filhos que serão renderizados dentro do provider
  ...props // Todos os outros props que são passados para o ThemeProvider original

}: ThemeProviderProps) {
  
  
  // Retorna o provider original do next-themes, repassando todos os props
  // e incluindo os filhos no seu interior para que o contexto de tema se propague na árvore de componentes.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
