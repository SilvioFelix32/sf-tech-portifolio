
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider defaultTheme="light" enableSystem={true} attribute="class">
      {children}
    </NextThemesProvider>
  );
}
