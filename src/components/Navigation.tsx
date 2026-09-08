import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F7]/85 backdrop-blur-md border-b border-[#E8CDD2]/35 py-3.5 shadow-xs'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand / Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-left group cursor-pointer"
        >
          <span className="font-serif tracking-[0.28em] text-xs sm:text-sm font-light uppercase text-[#302B2D] group-hover:text-[#A46F78] transition-colors">
            L Í G I A
          </span>
        </button>

        {/* Recruiter Shortcuts (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('sobre')}
            className="text-xs uppercase tracking-widest text-[#493D40] hover:text-[#A46F78] transition-colors cursor-pointer py-1"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('projetos')}
            className="text-xs uppercase tracking-widest text-[#493D40] hover:text-[#A46F78] transition-colors cursor-pointer py-1"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="text-xs uppercase tracking-widest text-[#493D40] hover:text-[#A46F78] transition-colors cursor-pointer py-1"
          >
            Contato
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            className="p-1.5 text-[#302B2D] hover:text-[#A46F78] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F7] border-b border-[#E8CDD2]/50 px-6 py-5 shadow-lg flex flex-col space-y-4">
          <button
            onClick={() => scrollToSection('sobre')}
            className="text-left text-xs uppercase tracking-widest text-[#493D40] hover:text-[#A46F78] py-1 cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('projetos')}
            className="text-left text-xs uppercase tracking-widest text-[#493D40] hover:text-[#A46F78] py-1 cursor-pointer"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="text-left text-xs uppercase tracking-widest text-[#493D40] hover:text-[#A46F78] py-1 cursor-pointer"
          >
            Contato
          </button>
        </div>
      )}
    </header>
  );
}
