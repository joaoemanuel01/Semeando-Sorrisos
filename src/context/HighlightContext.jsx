import { createContext, useContext, useCallback } from 'react';

const HighlightContext = createContext(null);

export function HighlightProvider({ children }) {
  const triggerHighlight = useCallback(() => {
    const el = document.getElementById('voluntario');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <HighlightContext.Provider value={{ triggerHighlight }}>
      {children}
    </HighlightContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useHighlight() {
  const ctx = useContext(HighlightContext);
  if (!ctx) throw new Error('useHighlight must be used inside <HighlightProvider>');
  return ctx;
}
