import iconRoupas          from '../../assets/icon-roupas.png';
import iconAlimentos       from '../../assets/icon-alimentosdoacao.png';
import iconHigienePessoal  from '../../assets/icon-higienepessoal.png';
import iconHigieneInfantil from '../../assets/icon-higieneinfantil.png';
import iconBrinquedos      from '../../assets/icon-brinquedos.png';

const DONATIONS = [
  { img: iconRoupas,          title: 'Roupas & Sapatos',  desc: 'Para crianças e adultos, em bom estado de conservação.' },
  { img: iconAlimentos,       title: 'Alimentos',          desc: 'Alimentos não-perecíveis e produtos da cesta básica.' },
  { img: iconHigienePessoal,  title: 'Higiene Pessoal',   desc: 'Produtos de higiene geral para adultos.' },
  { img: iconHigieneInfantil, title: 'Higiene Infantil',  desc: 'Fraldas, lenços umedecidos, sabonete infantil e mais.' },
  { img: iconBrinquedos,      title: 'Brinquedos',        desc: 'Brinquedos em bom estado para crianças de todas as idades.' },
];

export default function Doacoes() {
  return (
    <section id="doacoes" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <p className="text-xs font-semibold tracking-widest text-aqua-600 uppercase mb-3">
            Faça a Diferença
          </p>
          <h2 className="section-title">
            Doações <span className="text-aqua-600">Materiais</span>
          </h2>
          <p className="font-body text-navy-600/70 mt-4 max-w-xl mx-auto">
            Aceitamos os itens abaixo no nosso ponto de coleta nos dias e horários disponíveis.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {DONATIONS.map(({ img, title, desc }, i) => (
            <div
              key={i}
              className={`card flex flex-col items-center text-center gap-4 ${i % 2 === 0 ? 'fade-left' : 'fade-right'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={img}
                alt={title}
                className="w-20 h-20 object-contain drop-shadow-md"
                draggable={false}
              />
              <h4 className="font-display font-semibold text-navy-800 text-base">
                {title}
              </h4>
              <p className="text-sm text-navy-600/70 font-body leading-snug">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-navy-500 font-body">
          Entregue no{' '}
          <a href="#coleta" className="text-aqua-600 font-medium hover:underline">
            ponto de coleta
          </a>{' '}
          nos horários disponíveis. Fora do horário?{' '}
          <a
            href="https://www.instagram.com/semeandosorrisosjg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-aqua-600 font-medium hover:underline"
          >
            Entre em contato pelo Instagram.
          </a>
        </p>
      </div>
    </section>
  );
}
