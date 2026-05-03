import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { useHighlight } from '../../context/HighlightContext';

const NAV_LINKS = [
  { label: 'Sobre Nós',       href: '#sobre' },
  { label: 'Impacto',         href: '#impacto' },
  { label: 'Doações',         href: '#doacoes' },
  { label: 'Ponto de Coleta', href: '#coleta' },
  { label: 'Voluntariado',    href: '#voluntario' },
  { label: 'Dúvidas',         href: '#faq' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { triggerHighlight } = useHighlight();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleVolunteerClick = () => {
    closeMenu();
    triggerHighlight();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">

          {/* Logo + Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
          
            <img
              src="/logo.svg"
              alt="Semeando Sorrisos logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="leading-tight">
              <p className="font-display font-bold text-aqua-600 text-sm md:text-base tracking-wide">
                SEMEANDO SORRISOS
              </p>
              <p className="text-xs text-aqua-400 font-body tracking-widest hidden sm:block">
                TRANSFORMANDO DOAÇÕES EM AÇÕES
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm font-medium text-navy-700 hover:text-aqua-600
                             transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-aqua-500
                                   group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>


          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-navy-800 hover:bg-aqua-50 transition-colors"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-screen pb-6' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 font-body font-medium text-navy-700
                             hover:text-aqua-600 hover:bg-aqua-50 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3 px-4">
              <button
                onClick={handleVolunteerClick}
                className="btn-primary w-full justify-center"
              >
                <Heart size={16} />
                Quero Fazer uma Doação
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}