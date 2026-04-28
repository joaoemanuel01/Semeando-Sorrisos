import { Heart } from 'lucide-react';

// Simple Instagram SVG icon (lucide-react doesn't include it)
function InstagramIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    label: '@semeandosorrisosjg',
    href: 'https://www.instagram.com/semeandosorrisosjg',
  },
  {
    label: '@ceu_joaogrand',
    href: 'https://www.instagram.com/ceu_joaogrand',
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            {/*
              ================================================================
              LOGO (rodapé): Substitua o src pelo caminho correto do logo.svg
              ================================================================
            */}
            <img
              src="/logo.svg"
              alt="Semeando Sorrisos"
              className="w-14 h-14 object-contain opacity-90"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div>
              <p className="font-display font-bold text-aqua-300 text-base tracking-wide">
                SEMEANDO SORRISOS
              </p>
              <p className="text-xs text-aqua-500 tracking-widest mt-1">
                TRANSFORMANDO DOAÇÕES EM AÇÕES
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold text-aqua-300 mb-4 text-sm tracking-widest uppercase">
              Navegação
            </h4>
            <ul className="space-y-2">
              {['Sobre Nós', 'Impacto', 'Como Ajudar', 'Ponto de Coleta', 'Dúvidas'].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${['sobre','impacto','ajudar','coleta','faq'][i]}`}
                    className="text-sm text-gray-400 hover:text-aqua-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold text-aqua-300 mb-4 text-sm tracking-widest uppercase">
              Redes Sociais
            </h4>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 
                             hover:text-aqua-300 transition-colors group"
                >
                  <InstagramIcon
                    size={18}
                    className="text-aqua-500 group-hover:text-aqua-300 transition-colors"
                  />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row 
                        items-center justify-between gap-3 text-center">
          <p className="text-xs text-gray-500">
            © 2026 Semeando Sorrisos. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Feito com <Heart size={12} className="text-aqua-500" /> em Goiânia
          </p>
        </div>
      </div>
    </footer>
  );
}
