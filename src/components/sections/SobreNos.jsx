import { CheckCircle2 } from 'lucide-react';
import iconPresenca        from '../../assets/icon-presenca.png';
import iconCuidado         from '../../assets/icon-cuidado.png';
import iconVinculos        from '../../assets/icon-vinculos.png';
import iconResponsabilidade from '../../assets/icon-responsabilidade.png';

const PILLARS = [
  'Ações planejadas e organizadas com responsabilidade',
  'Foco na presença humana e construção de vínculos',
  'Acompanhamento contínuo das famílias apoiadas',
  'Execução transparente e comprometida',
];

const CARDS = [
  { src: iconPresenca,         title: 'Presença',        desc: 'Estamos ao lado de quem precisa, de verdade.' },
  { src: iconCuidado,          title: 'Cuidado',          desc: 'Cada pessoa é tratada com dignidade e respeito.' },
  { src: iconVinculos,         title: 'Vínculos',         desc: 'Construímos relações que duram além das doações.' },
  { src: iconResponsabilidade, title: 'Responsabilidade', desc: 'Organização e transparência em cada ação.' },
];

export default function SobreNos() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Column */}
          <div className="fade-up">
            <p className="text-xs font-semibold tracking-widest text-aqua-600 uppercase mb-3">
              Nossa Missão
            </p>
            <h2 className="section-title mb-6">
              Mais do que doações,<br />
              <span className="text-aqua-600">presença e cuidado</span>
            </h2>
            <p className="font-body text-navy-700/80 text-lg leading-relaxed mb-6">
              "Semeando Sorrisos" atua com ações voluntárias diretas voltadas ao apoio
              de pessoas em vulnerabilidade. Mais do que doações, nosso foco é o cuidado
              e a presença.
            </p>
            <p className="font-body text-navy-700/80 text-lg leading-relaxed mb-8">
              Cada ação é planejada, organizada e executada com responsabilidade e
              acompanhamento, porque acreditamos que transformação social começa
              com vínculos humanos genuínos.
            </p>
            <ul className="space-y-3">
              {PILLARS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-aqua-500 mt-0.5 shrink-0" />
                  <span className="font-body text-navy-700 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cards Column */}
          <div className="fade-up grid grid-cols-2 gap-4">
            {CARDS.map(({ src, title, desc }, i) => (
              <div
                key={i}
                className="card flex flex-col items-center gap-3 text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={src}
                  alt={title}
                  className="w-20 h-20 object-contain drop-shadow-md"
                  draggable={false}
                />
                <h3 className="font-display font-semibold text-navy-800 text-base">
                  {title}
                </h3>
                <p className="text-sm text-navy-600/70 font-body leading-snug">
                  {desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
