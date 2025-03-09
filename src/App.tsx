
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ServiceDetail from './pages/ServiceDetail';
import PointsProgram from './pages/PointsProgram';
import MissionVision from './pages/MissionVision';
import Careers from './pages/Careers';
import FounderMessage from './pages/FounderMessage';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Sitemap from './pages/Sitemap';
import Press from './pages/Press';
import BrandGuidelines from './pages/BrandGuidelines';
import { Toaster } from './components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/points-program" element={<PointsProgram />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/founder-message" element={<FounderMessage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/press" element={<Press />} />
          <Route path="/brand-guidelines" element={<BrandGuidelines />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
