
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from './components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './contexts/LanguageContext';
import { FriendlyLoading } from './components/ui/friendly-loading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// Import the Index page eagerly as it's the landing page
import Index from './pages/Index';

// Lazy load other pages
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const PointsProgram = lazy(() => import('./pages/PointsProgram'));
const MissionVision = lazy(() => import('./pages/MissionVision'));
const Careers = lazy(() => import('./pages/Careers'));
const FounderMessage = lazy(() => import('./pages/FounderMessage'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Terms = lazy(() => import('./pages/Terms'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const Press = lazy(() => import('./pages/Press'));
const CompanyInfo = lazy(() => import('./pages/CompanyInfo'));
const BrandGuidelines = lazy(() => import('./pages/BrandGuidelines'));
const LogoEvolutionViewer = lazy(() => import('./pages/LogoEvolutionViewer'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5分間はキャッシュを使用
      gcTime: 10 * 60 * 1000 // 10分間キャッシュを保持
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Router>
          <Suspense fallback={
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <div className="flex-grow flex items-center justify-center">
                <FriendlyLoading variant="robot" size="lg" />
              </div>
              <Footer />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/service/:serviceId" element={<ServiceDetail />} /> {/* 互換性のための古いルート */}
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
              <Route path="/company-info" element={<CompanyInfo />} />
              <Route path="/brand-guidelines" element={<BrandGuidelines />} />
              <Route path="/logo-evolution-viewer" element={<LogoEvolutionViewer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Toaster />
        </Router>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
