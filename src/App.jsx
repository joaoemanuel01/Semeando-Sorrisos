import { useEffect } from 'react';
import { HighlightProvider } from './context/HighlightContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import SobreNos from './components/sections/SobreNos';
import Impacto from './components/sections/Impacto';
import Doacoes from './components/sections/Doacoes';
import PontoDeColeta from './components/sections/PontoDeColeta';
import Voluntario from './components/sections/Voluntario';
import FAQ from './components/sections/FAQ';

function AppContent() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    const timer = setTimeout(() => {
      // Registra todas as classes de animação
      document.querySelectorAll('.fade-up, .fade-left, .fade-right')
        .forEach((el) => observer.observe(el));
    }, 100);

    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SobreNos />
        <Impacto />
        <Doacoes />
        <PontoDeColeta />
        <Voluntario />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HighlightProvider>
      <AppContent />
    </HighlightProvider>
  );
}
