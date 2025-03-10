import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from './components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './contexts/LanguageContext';
import { LoadingSpinner } from './components/ui/loading-spinner';
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Router>
          <Suspense fallback={
            <div className="flex h-screen w-full items-center justify-center">
              <LoadingSpinner size="lg" text="読み込み中..." />
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
