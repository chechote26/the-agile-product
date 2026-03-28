import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Cursos from "./pages/Cursos";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Laboratorio from "./pages/Laboratorio";

const queryClient = new QueryClient();

const App = () => {
  // Sensor Global de Eventos
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-id]');
      if (target) {
        const id = target.getAttribute('data-id');
        // @ts-ignore
        if (typeof window.gtag === 'function') {
          // @ts-ignore
          window.gtag('event', 'button_interaction', {
            'button_name': id
          });
          console.log('✅ Global Tracking:', id);
        }
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cursos" element={<Cursos />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/laboratorio" element={<Laboratorio />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;