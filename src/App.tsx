import React, { useState } from 'react';
import './App.css';
import './components/components.css';
import PathsecureNavigation from './components/PathsecureNavigation';
import { HomePage } from './pages/Home';
import { ServicesPage, IAMPage } from './pages/Services';
import { BlogsPage } from './pages/Resources';
import { AboutUsPage } from './pages/AboutUs';
import { ContactUsPage } from './pages/ContactUs';
import Footer from './components/Footer';

// Import the About section pages
import TeamPage from './pages/AboutUs/TeamPage';
import ApproachPage from './pages/AboutUs/ApproachPage';
import OurApproachPage from './pages/AboutUs/OurApproachPage';

// Import Resources pages
import WebinarsPage from './pages/Resources/WebinarsPage';
import WebinarDetailPage from './pages/Resources/WebinarDetailPage';
import WhitePapersPage from './pages/Resources/WhitePapersPage';
import CaseStudiesPage from './pages/Resources/CaseStudiesPage';
import BlogDetailPage from './pages/Resources/BlogDetailPage';
import CaseStudyDetailPage from './pages/Resources/CaseStudyDetailPage';

// Import Industries pages
import { IndustriesPage } from './pages/Industries';

function App() {
  // Simple state-based routing without using React Router for now
  const [currentPage, setCurrentPage] = useState('home');
  const [webinarId, setWebinarId] = useState<number | null>(null);
  const [whitePaperId, setWhitePaperId] = useState<number | null>(null);
  const [blogSlug, setBlogSlug] = useState<string | null>(null);
  const [caseStudyId, setCaseStudyId] = useState<number | null>(null);

  // Function to render the current page based on the state
  const renderPage = () => {
    switch(currentPage) {
      case 'services':
        return <ServicesPage />;
      case 'iam':
        return <IAMPage />;
      case 'industries':
        return <IndustriesPage />;
      case 'resources':
        return <BlogsPage onBlogClick={(slug: string) => {
          setBlogSlug(slug);
          setCurrentPage('blog-detail');
        }} />;
      case 'blog-detail':
        return <BlogDetailPage onBack={() => setCurrentPage('blogs')} />;
      case 'webinars':
        return <WebinarsPage onWebinarClick={(id: number) => {
          setWebinarId(id);
          setCurrentPage('webinar-detail');
        }} />;
      case 'webinar-detail':
        return <WebinarDetailPage webinarId={webinarId} onBack={() => setCurrentPage('webinars')} />;
      case 'white-papers':
        return <WhitePapersPage onWhitePaperClick={(id: number) => {
          setWhitePaperId(id);
          setCurrentPage('whitepaper-detail');
        }} />;
      case 'whitepaper-detail':
        return <WhitePapersPage 
          onWhitePaperClick={(id: number) => {
            setWhitePaperId(id);
            setCurrentPage('whitepaper-detail');
          }} 
          initialSelectedId={whitePaperId || 1}
          initialShowDetailPage={true}
        />;
      case 'case-studies':
        return <CaseStudiesPage onCaseStudyClick={(id: number) => {
          setCaseStudyId(id);
          setCurrentPage('case-study-detail');
        }} />;
      case 'case-study-detail':
        return <CaseStudyDetailPage onBack={() => setCurrentPage('case-studies')} />;
      case 'blogs':
        return <BlogsPage onBlogClick={(slug: string) => {
          setBlogSlug(slug);
          setCurrentPage('blog-detail');
        }} />;
      case 'about':
        return <AboutUsPage />;
      case 'team':
        return <TeamPage />;
      case 'approach':
        return <OurApproachPage />;
      case 'careers':
        // Use ApproachPage for careers
        return <ApproachPage />;
      case 'contact':
        return <ContactUsPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  // Navigation handler
  const handleNavigation = (page: string) => {
    console.log(`App navigating to: ${page}`);
    setCurrentPage(page);
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <PathsecureNavigation 
        logoSrc="/logo.png" 
        logoAlt="Pathsecure Logo"
        onNavigate={handleNavigation}
        currentPage={currentPage}
      />
      {renderPage()}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;
