import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './Auth/ProtectedRoute';

// Landing Page Components
import Hero from './components/LandingPage/components/Hero';
import Features from './components/LandingPage/components/Features';
import Agents from './components/LandingPage/components/Agents';
import AgentsPage from './components/LandingPage/components/AgentsPage';
import Roles from './components/LandingPage/components/Roles';
import Testimonial from './components/LandingPage/components/Testimonial';
import PricingPage from './components/LandingPage/components/Pricing';
import AboutPage from './components/About/AboutPage';
import CareerPage from './components/Career/CareerPage';
import LandingNavbar from './components/Navbar/Navbar';
import Footer from './components/LandingPage/components/Footer';

// Authentication Components
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

// App Components
import MainApp from "./components/MainApp";
import Settings from './components/Settings/Settings';
import ComingSoon from './components/ComingSoon/ComingSoon';


// Layout Component with Navbar
function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0B1221] text-white">
      <LandingNavbar />
      {children}
    </div>
  );
}

// Landing Page Layout Component
function LandingPageLayout() {
  return (
    <PageLayout>
      <main>
        <Hero />
        <Features />
        <Agents />
        <Roles />
        <Testimonial />
      </main>
      <Footer />
    </PageLayout>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            {/* Landing Pages */}
            <Route path="/" element={<LandingPageLayout />} />
            
            <Route path="/about" element={
              <PageLayout>
                <AboutPage />
              </PageLayout>
            } />
            
            <Route path="/agents" element={
              <PageLayout>
                <AgentsPage />
                <Footer />
              </PageLayout>
            } />
            
            <Route path="/pricing" element={
              <PageLayout>
                <PricingPage />
                <Footer />
              </PageLayout>
            } />
            
            <Route path="/career" element={
              <PageLayout>
                <CareerPage />
                <Footer />
              </PageLayout>
            } />
            
            <Route path="/coming-soon" element={
              <ProtectedRoute>
                <ComingSoon />
              </ProtectedRoute>
            } />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard/*" element={
              <ProtectedRoute>
                <MainApp />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            } />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;










