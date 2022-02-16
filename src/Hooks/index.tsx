import React from "react";
import { ThemeProvider } from './Theme'
import { AuthProvider } from './auth'
import { SettingsProvider } from './settings'

interface ContextsProviderProps {
  children: React.ReactNode
}

// children é onde vao estar as rotas da aplicação

export default function ContextsProvider ({ children }: ContextsProviderProps) {
  return (
    <AuthProvider>
      <SettingsProvider>
        <ThemeProvider> {children} </ThemeProvider>
      </SettingsProvider>
    </AuthProvider>
  )
} 