import { Heart, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(160deg, #ffffff 0%, #e0f5fe 45%, #b9ecfd 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-0 w-72 h-72 md:w-96 md:h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #38cef5 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-10 left-0 w-56 h-56 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0293c0 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm 
                        border border-aqua-200 text-aqua-700 text-xs font-semibold 
                        tracking-widest uppercase px-4 py-2 rounded-full mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-aqua-500 animate-pulse" />
          Projeto Social Independente · Goiânia
        </div>

        {/* Title */}
        <h1 className="font-display font-bold text-navy-800 leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}>
          Semeando Sorrisos:{' '}
          <span className="text-aqua-600">
            Transformando Doações em Ações
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg md:text-xl text-navy-700/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Um projeto social independente de Goiânia que oferece apoio direto a pessoas
          em situação de vulnerabilidade. Nosso foco é a presença, o cuidado e a
          construção de vínculos.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#ajudar" className="btn-primary text-base w-full sm:w-auto justify-center">
            <Users size={18} />
            Quero Ser Voluntário
          </a>
          <a href="#ajudar" className="btn-outline text-base w-full sm:w-auto justify-center">
            <Heart size={18} />
            Fazer uma Doação
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-50">
          <p className="text-xs font-body tracking-widest text-navy-600 uppercase">Role para baixo</p>
          <div className="w-px h-10 bg-gradient-to-b from-aqua-500 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
