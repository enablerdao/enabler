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
import BlogDetail from "./pages/BlogDetail";
import PointsProgram from "./pages/PointsProgram";
import TimeDrop from "./pages/TimeDrop";
import Team from "./pages/Team";
import Press from "./pages/Press";
import Sitemap from "./pages/Sitemap";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/service/:name" element={<ServiceDetail />} />
          <Route path="/admin/logs" element={<AdminLogs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/points-program" element={<PointsProgram />} />
          <Route path="/timedrop" element={<TimeDrop />} />
          <Route path="/team" element={<Team />} />
          <Route path="/press" element={<Press />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
