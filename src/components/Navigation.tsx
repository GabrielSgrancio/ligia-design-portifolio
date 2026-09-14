import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
          ? 'bg-[#eadbcd]/34 backdrop-blur-[3px] border-b border-[#f6eadc]/30 py-3.5'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao início"
          className="group min-h-11 cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#714f3e]"
        >
          <span className="font-serif italic tracking-[0.32em] text-sm sm:text-[15px] font-normal text-[#382c23] group-hover:text-[#6e4e3e] transition-colors">
            L Í G I A
          </span>
        </button>

        <nav className="hidden md:flex items-center space-x-10">
          <button
            onClick={() => scrollToSection('sobre')}
            className="min-h-11 cursor-pointer py-1 font-sans text-[10.5px] uppercase tracking-[0.24em] text-[#4a3e35] transition-colors hover:text-[#281e18] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#714f3e]"
          >
            Origem
          </button>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="grid min-h-11 min-w-11 cursor-pointer place-items-center text-[#302B2D] transition-colors hover:text-[#A46F78] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#714f3e]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="flex flex-col border-b border-[#E8CDD2]/50 bg-[#FAF8F7] px-6 py-4 shadow-lg md:hidden"
        >
          <button
            onClick={() => scrollToSection('sobre')}
            className="min-h-11 cursor-pointer py-2 text-left text-xs uppercase tracking-widest text-[#493D40] hover:text-[#A46F78] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#714f3e]"
          >
            Origem
          </button>
        </nav>
      )}
    </header>
  );
}
