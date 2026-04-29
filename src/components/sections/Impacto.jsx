import { useCounter } from '../../hooks/useCounter';

const STATS = [
  { target: 500,  prefix: '+',  suffix: '',          label: 'Famílias Apoiadas',    icon: '🏠' },
  { target: 1,    prefix: '+',  suffix: ' Ton.',     label: 'Alimentos Arrecadados', icon: '🌾' },
  { target: 50,   prefix: '+',  suffix: '',          label: 'Voluntários Ativos',   icon: '🙌' },
  { target: 1200, prefix: '+',  suffix: '',          label: 'Sorrisos Semeados',    icon: '😊' },
];

function StatCard({ stat }) {
  const { count, ref } = useCounter(stat.target, 2200);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center px-4 py-8"
    >
      <span className="text-4xl mb-3">{stat.icon}</span>
      <p className="font-display font-bold text-navy-800 leading-none mb-2"
         style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
        {stat.prefix}{count.toLocaleString('pt-BR')}{stat.suffix}
      </p>
      <p className="font-body text-sm font-medium text-aqua-700 tracking-wide uppercase">
        {stat.label}
      </p>
    </div>
  );
}

export default function Impacto() {
  return (
    <section
      id="impacto"
      className="py-20 md:py-24"
      style={{ background: 'linear-gradient(135deg, #e0f5fe 0%, #f0fbff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 fade-up">
          <p className="text-xs font-semibold tracking-widest text-aqua-600 uppercase mb-3">
            Prova Social
          </p>
          <h2 className="section-title">
            Nosso <span className="text-aqua-600">Impacto</span>
          </h2>
          <p className="font-body text-navy-700/70 mt-4 max-w-xl mx-auto">
            Por trás de cada número, existe uma história real que ganhou um novo capítulo de esperaça e recomeço.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-aqua-400 rounded-full mx-auto mb-12" />

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 
                        divide-aqua-200 bg-white/60 backdrop-blur-sm rounded-3xl 
                        shadow-sm border border-aqua-100 overflow-hidden">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </div>

        <p className="text-center text-xs text-navy-500/60 mt-6 font-body">
          * Dados estimados com base nas ações realizadas até hoje.
        </p>
      </div>
    </section>
  );
}
