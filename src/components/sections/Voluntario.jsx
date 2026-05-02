import { useState } from 'react';
import { Send, ExternalLink, HandHeart } from 'lucide-react';

const WHATSAPP_NUMBER = '5562993855866';

export default function Voluntario() {
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '', mensagem: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.nome || !form.whatsapp) {
      alert('Por favor, preencha pelo menos seu nome e WhatsApp.');
      return;
    }
    const msg = encodeURIComponent(
      `Olá! Me chamo ${form.nome} e quero ser voluntário do Semeando Sorrisos.\n` +
        `E-mail: ${form.email || 'não informado'}\n` +
        `Mensagem: ${form.mensagem || 'Tenho interesse em ajudar!'}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section
      id="voluntario"
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #f0fbff 0%, #ffffff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <p className="text-xs font-semibold tracking-widest text-aqua-600 uppercase mb-3">
            Junte-se a Nós
          </p>
          <h2 className="section-title">
            Seja <span className="text-aqua-600">Voluntário</span>
          </h2>
        </div>

        <div
          className="overflow-hidden shadow border border-aqua-100 fade-up"
          style={{ background: 'linear-gradient(135deg, #f0fbff 0%, #e0f5fe 100%)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left — text */}
            <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center bg-aqua-700">
                <HandHeart size={24} className="text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl text-navy-800 mb-4 leading-tight">
                  Sua presença é o maior presente.
                </h3>
                <p className="font-body text-navy-700/80 text-lg leading-relaxed">
                  Junte-se a nós como voluntário. Vamos juntos levar cuidado, carinho e presença para quem mais precisa💛
                </p>
              </div>
              <a
                href="https://www.instagram.com/semeandosorrisosjg"
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
                <div className="flex flex-col items-center justify-center h-full gap-5 text-center py-8">
                  <div className="w-14 h-14 flex items-center justify-center bg-aqua-100 border border-aqua-200">
                    <HandHeart size={28} className="text-aqua-700" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-display font-bold text-xl text-navy-800">
                    Obrigado pelo interesse!
                  </h4>
                  <p className="text-navy-600/80 font-body text-sm max-w-xs">
                    Você foi redirecionado para o WhatsApp. Nossa equipe entrará em contato em breve.
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
                    { name: 'nome',     placeholder: 'Seu nome completo *', type: 'text' },
                    { name: 'email',    placeholder: 'E-mail',               type: 'email' },
                    { name: 'whatsapp', placeholder: 'WhatsApp *',            type: 'tel' },
                  ].map((field) => (
                    <input
                      key={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-aqua-200 font-body text-navy-800
                                 placeholder-navy-400/60 focus:outline-none focus:ring-2
                                 focus:ring-aqua-400 focus:border-transparent transition-all"
                    />
                  ))}
                  <textarea
                    name="mensagem"
                    placeholder="Mensagem ou disponibilidade de horário (opcional)"
                    rows={3}
                    value={form.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-aqua-200 font-body text-navy-800
                               placeholder-navy-400/60 focus:outline-none focus:ring-2
                               focus:ring-aqua-400 focus:border-transparent transition-all resize-none"
                  />
                  <button onClick={handleSubmit} className="btn-primary w-full justify-center">
                    <Send size={16} />
                    Enviar para WhatsApp
                  </button>
                  <p className="text-xs text-navy-400 font-body text-center pt-1">
                    * Campos obrigatórios. Você será redirecionado para o WhatsApp.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
