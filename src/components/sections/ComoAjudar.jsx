import { useState } from 'react';
import { Send, ExternalLink } from 'lucide-react';

// Donation items
const DONATIONS = [
  { icon: '👕', title: 'Roupas E Sapatos',   desc: 'Para crianças e adultos, em bom estado de conservação.' },
  { icon: '🥫', title: 'Alimentos',           desc: 'Alimentos não-perecíveis e produtos da cesta básica.' },
  { icon: '🧴', title: 'Higiene Pessoal',     desc: 'Produtos de higiene geral para adultos.' },
  { icon: '🍼', title: 'Higiene Infantil',    desc: 'Fraldas, lenços umedecidos, sabonete infantil e mais.' },
  { icon: '🧸', title: 'Brinquedos',          desc: 'Brinquedos em bom estado para crianças de todas as idades.' },
];

// WhatsApp number — update as needed
const WHATSAPP_NUMBER = '5562996732455';

export default function ComoAjudar() {
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '', mensagem: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.nome || !form.whatsapp) {
      alert('Por favor, preencha pelo menos nome e WhatsApp.');
      return;
    }
    // Redirect to WhatsApp with pre-filled message
    const msg = encodeURIComponent(
      `Olá! Me chamo ${form.nome} e quero ser voluntário do Semeando Sorrisos.\n` +
      `Email: ${form.email}\n` +
      `Mensagem: ${form.mensagem || 'Tenho interesse em ajudar!'}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="ajudar" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 fade-up">
          <p className="text-xs font-semibold tracking-widest text-aqua-600 uppercase mb-3">
            Faça a Diferença
          </p>
          <h2 className="section-title">
            Como Você Pode <span className="text-aqua-600">Ajudar</span>
          </h2>
        </div>

        {/* ── Donations ── */}
        <div className="mb-20">
          <h3 className="font-display font-semibold text-2xl text-navy-800 mb-2 text-center">
            Doações Materiais
          </h3>
          <p className="text-center text-navy-600/70 font-body mb-8">
            Aceitamos os itens abaixo no nosso ponto de coleta.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {DONATIONS.map((item, i) => (
              <div
                key={i}
                className="card flex flex-col items-center text-center gap-3 fade-up"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="text-4xl">{item.icon}</span>
                <h4 className="font-display font-semibold text-navy-800 text-base">
                  {item.title}
                </h4>
                <p className="text-sm text-navy-600/70 font-body leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center mt-6 text-sm text-navy-500 font-body">
            Entregue no{' '}
            <a href="#coleta" className="text-aqua-600 font-medium hover:underline">
              ponto de coleta
            </a>{' '}
            nos horários disponíveis.
          </p>
        </div>

        {/* ── Volunteer Form ── */}
        <div
          className="rounded-3xl overflow-hidden shadow-lg border border-aqua-100 fade-up"
          style={{ background: 'linear-gradient(135deg, #f0fbff 0%, #e0f5fe 100%)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left — text */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-4xl mb-4">🙌</span>
              <h3 className="font-display font-bold text-3xl text-navy-800 mb-4 leading-tight">
                Sua presença é o maior presente.
              </h3>
              <p className="font-body text-navy-700/80 text-lg leading-relaxed mb-6">
                Junte-se a nós como voluntário. Não é preciso experiência — apenas
                vontade de ajudar e acolher.
              </p>
              <a
                href={`https://www.instagram.com/semeandosorrisosjg`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-aqua-600 hover:text-navy-800 transition-colors"
              >
                <ExternalLink size={14} />
                Siga-nos no Instagram para novidades
              </a>
            </div>

            {/* Right — form */}
            <div className="bg-white p-8 md:p-12">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-8">
                  <span className="text-5xl">🎉</span>
                  <h4 className="font-display font-bold text-xl text-navy-800">
                    Obrigado pelo interesse!
                  </h4>
                  <p className="text-navy-600/80 font-body">
                    Você será redirecionado para o WhatsApp. Entraremos em contato em breve.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline text-sm py-2 px-5">
                    Enviar novo cadastro
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-xl text-navy-800 mb-6">
                    Cadastro de Voluntário
                  </h4>

                  {[
                    { name: 'nome',      placeholder: 'Seu nome completo *', type: 'text' },
                    { name: 'email',     placeholder: 'E-mail',              type: 'email' },
                    { name: 'whatsapp',  placeholder: 'WhatsApp *',          type: 'tel' },
                  ].map((field) => (
                    <input
                      key={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-aqua-200 
                                 font-body text-navy-800 placeholder-navy-400/60
                                 focus:outline-none focus:ring-2 focus:ring-aqua-400 
                                 focus:border-transparent transition-all"
                    />
                  ))}

                  <textarea
                    name="mensagem"
                    placeholder="Mensagem ou disponibilidade (opcional)"
                    rows={3}
                    value={form.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-aqua-200 
                               font-body text-navy-800 placeholder-navy-400/60
                               focus:outline-none focus:ring-2 focus:ring-aqua-400 
                               focus:border-transparent transition-all resize-none"
                  />

                  <button onClick={handleSubmit} className="btn-primary w-full justify-center">
                    <Send size={16} />
                    Quero Ser Voluntário
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
