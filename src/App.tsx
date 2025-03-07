
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServiceDetail from "./pages/ServiceDetail";
import NotFound from "./pages/NotFound";
import AdminLogs from "./pages/AdminLogs";
import Blog from "./pages/Blog";
import PointsProgram from "./pages/PointsProgram";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/admin/logs" element={<AdminLogs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/points-program" element={<PointsProgram />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
