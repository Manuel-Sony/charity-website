"use client"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"


export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false} // Disable system theme to prevent hydration mismatch
      forcedTheme="light" // Force light theme to ensure consistency
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

