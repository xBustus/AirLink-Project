import React, { useState, useEffect } from 'react';
import { Menu, X, Link as LinkIcon } from 'lucide-react';
import Button from '../ui/Button';

const NavLink = ({ page, label, mobile = false, activePage, onClick }) => {
  const isActive = activePage === page;
  
  return (
    <button 
      onClick={() => onClick(page)}
      className={`relative font-medium transition-all duration-300 px-4 py-2 rounded-lg group
      ${mobile ? 'text-xl w-full text-left' : 'text-sm'}
      ${isActive 
        ? 'text-white bg-white/10 shadow-inner' 
        : 'text-gray-300 hover:text-white hover:bg-white/5'
      }`}
    >
      {label}
      {!mobile && isActive && (
        <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></span>
      )}
    </button>
  );
};

const Header = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  // Efeito para detectar scroll e mudar a opacidade
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 pt-4
          ${isMenuOpen ? 'bg-transparent' : ''}
        `}
      >
        <div 
          className={`
            max-w-7xl mx-auto rounded-2xl border transition-all duration-300
            flex items-center justify-between px-6 py-3
            ${scrolled || isMenuOpen
              ? 'bg-[#0a0a2e]/80 backdrop-blur-xl border-white/10 shadow-lg shadow-blue-900/20' 
              : 'bg-transparent border-transparent'
            }
          `}
        >
          <div 
            className="flex items-center gap-2 cursor-pointer select-none group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-blue-500/50 transition-all">
              <LinkIcon size={18} className="transform -rotate-45" />
            </div>
            <span className="text-xl font-days text-white tracking-wide">
              AIRLINK
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-1 bg-black/20 p-1 rounded-xl border border-white/5">
            <NavLink page="home" label="Início" activePage={currentPage} onClick={handleNavClick} />
            <NavLink page="templates" label="Templates" activePage={currentPage} onClick={handleNavClick} />
            <NavLink page="about" label="Sobre" activePage={currentPage} onClick={handleNavClick} />
            <NavLink page="contact" label="Contato" activePage={currentPage} onClick={handleNavClick} />
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-300 hover:text-white font-medium text-sm transition-colors px-3">
              Login
            </button>
            <Button variant="primary" className="px-5 py-2 text-xs h-9 shadow-none hover:shadow-lg">
              Criar Conta
            </Button>
          </div>
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#010162]/95 backdrop-blur-xl pt-28 px-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            <NavLink page="home" label="Início" mobile activePage={currentPage} onClick={handleNavClick} />
            <NavLink page="templates" label="Templates" mobile activePage={currentPage} onClick={handleNavClick} />
            <NavLink page="about" label="Sobre" mobile activePage={currentPage} onClick={handleNavClick} />
            <NavLink page="contact" label="Contato" mobile activePage={currentPage} onClick={handleNavClick} />
            
            <hr className="border-white/10 my-4" />
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full justify-center">Login</Button>
              <Button variant="primary" className="w-full justify-center">Criar Conta</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;