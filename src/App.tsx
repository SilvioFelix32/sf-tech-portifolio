import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/context/LanguageContext/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext/ThemeContext";
import HomePage from "@/app/_components/HomePage";
import LoadingScreen from "./components/LoadingScreen";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            {isLoading ? (
              <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
            ) : (
              <>
                <Toaster />
                <Sonner />
                <HomePage />
              </>
            )}
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
