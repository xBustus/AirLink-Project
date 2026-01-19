//
import React, { useState } from 'react';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Templates from './pages/Templates';
import About from './pages/About';
import Contact from './pages/Contact';
import Editor from './pages/Editor';
import View from './pages/View.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setCurrentPage('editor');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': 
        return <Home navigateTo={setCurrentPage} />;
      case 'templates': 
        return <Templates onSelect={handleTemplateSelect} />;
      case 'editor': 
        return <Editor template={selectedTemplate} navigateTo={setCurrentPage} />;
      case 'view': 
        return <View navigateTo={setCurrentPage} />; // <--- Rota da página pública
      case 'about': 
        return <About />;
      case 'contact': 
        return <Contact />;
      default: 
        return <Home navigateTo={setCurrentPage} />;
    }
  };

  // Esconder Header/Footer nas páginas de "app" (Editor e View)
  const isAppPage = currentPage === 'editor' || currentPage === 'view';

  return (
    <div className="min-h-screen w-full bg-[#020024] bg-gradient-to-br from-[#010162] via-[#090979] to-[#020024] font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {!isAppPage && (
        <Header 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}

      <div className={`w-full flex flex-col min-h-screen ${isAppPage ? 'pt-0' : 'pt-32'} pb-12`}>
        <main className="flex-grow w-full px-4">
          {renderPage()}
        </main>
        
        {!isAppPage && (
          <div className="px-4 md:px-8 xl:px-16">
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}