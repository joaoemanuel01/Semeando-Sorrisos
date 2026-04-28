import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'O que o projeto mais precisa no momento?',
    answer:
      'No momento, nossa maior necessidade são roupas e sapatos (para crianças e adultos), alimentos não-perecíveis, produtos de higiene pessoal e infantil, e brinquedos em bom estado. Toda contribuição, grande ou pequena, faz diferença!',
  },
  {
    question: 'Preciso ter experiência para ser voluntário?',
    answer:
      'Não! Não é preciso ter nenhuma experiência prévia. O que buscamos é vontade genuína de ajudar, acolher e estar presente. Nossa equipe acolhe cada voluntário e apresenta como funcionam nossas ações.',
  },
  {
    question: 'Posso entregar doações fora do horário de funcionamento?',
    answer:
      'Os horários oficiais são toda segunda e quarta-feira a partir das 17h. Para entregas fora desse horário, entre em contato com a gente pelo Instagram (@semeandosorrisosjg) para combinarmos um momento adequado.',
  },
  {
    question: 'Como faço para acompanhar as ações do projeto?',
    answer:
      'Siga nossos perfis no Instagram: @semeandosorrisosjg e @ceu_joaogrand. Compartilhamos atualizações, fotos das ações e informações sobre próximos eventos por lá.',
  },
  {
    question: 'O projeto atua apenas em Goiânia?',
    answer:
      'Sim, somos um projeto local sediado em Goiânia. Nossas ações são focadas em comunidades da cidade, permitindo acompanhamento próximo e contínuo de cada família apoiada.',
  },
];

function AccordionItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-aqua-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left 
                   group focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-body font-semibold text-navy-800 text-base group-hover:text-aqua-700 transition-colors">
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-aqua-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p className="font-body text-navy-700/80 text-base leading-relaxed pb-5">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #f0fbff 0%, #ffffff 100%)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <p className="text-xs font-semibold tracking-widest text-aqua-600 uppercase mb-3">
            Esclarecemos suas Dúvidas
          </p>
          <h2 className="section-title">
            Perguntas <span className="text-aqua-600">Frequentes</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="bg-white rounded-3xl shadow-sm border border-aqua-100 px-6 md:px-8 fade-up">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* CTA below FAQ */}
        <div className="text-center mt-12 fade-up">
          <p className="font-body text-navy-600/80 mb-4">
            Ainda tem dúvidas? Fale com a gente!
          </p>
          <a
            href="https://www.instagram.com/semeandosorrisosjg"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
