import { MapPin, Clock, Phone } from 'lucide-react';

const ADDRESS = 'Centro Espírita de Umbanda João Grande, R. Campinas, 242 - St. Bueno, Goiânia - GO, 74210-116';
const MAPS_QUERY = encodeURIComponent(ADDRESS);

// Embedded Google Maps iframe src
const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.5!2d-49.2605!3d-16.7059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3a3a3a3a3a3%3A0x0!2zUi4gQ2FtcGluYXMsIDI0MiAtIFNldG9yIEJ1ZW5vLCBHb2nDom5pYQ!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr';

export default function PontoDeColeta() {
  return (
    <section id="coleta" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <p className="text-xs font-semibold tracking-widest text-aqua-600 uppercase mb-3">
            Onde Estamos
          </p>
          <h2 className="section-title">
            Nosso <span className="text-aqua-600">Ponto de Coleta</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch fade-up">

          {/* Info Card */}
          <div
            className="lg:col-span-2 rounded-3xl p-8 md:p-10 flex flex-col justify-between gap-8"
            style={{ background: 'linear-gradient(145deg, #e0f5fe 0%, #b9ecfd 100%)' }}
          >
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-aqua-600 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-800 text-lg mb-1">
                    Centro Espírita de Umbanda João Grande
                  </h3>
                  <p className="font-body text-navy-700/80 text-sm leading-relaxed">
                    R. Campinas, 242 — Setor Bueno<br />
                    Goiânia – GO, 74210-116
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-aqua-600 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-800 text-base mb-1">
                    Horário de Funcionamento
                  </h3>
                  <p className="font-body text-navy-700/80 text-sm">
                    Toda <strong>segunda e quarta-feira</strong><br />
                    A partir das <strong>17h00</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-aqua-600 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-800 text-base mb-1">
                    Fora do Horário?
                  </h3>
                  <p className="font-body text-navy-700/80 text-sm">
                    Entre em contato pelo Instagram para combinar outro horário.
                  </p>
                  <a
                    href="https://www.instagram.com/semeandosorrisosjg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-aqua-700 font-semibold text-sm mt-2 hover:underline"
                  >
                    @semeandosorrisosjg →
                  </a>
                </div>
              </div>
            </div>

            {/* Open in Maps button */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center text-sm"
            >
              <MapPin size={16} />
              Abrir no Google Maps
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-lg border border-aqua-100 min-h-72">
            <iframe
              title="Mapa do Ponto de Coleta — Semeando Sorrisos"
              src={MAPS_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '340px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
