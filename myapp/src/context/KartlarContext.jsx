import { createContext, useState, useEffect } from 'react';

export const KartlarContext = createContext();

export const KartlarProvider = ({ children }) => {
  const [elindekiler, setElindekiler] = useState(() => {
    const saved = localStorage.getItem('elindekikartlar');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('elindekikartlar', JSON.stringify(elindekiler));
  }, [elindekiler]);

  const kartEkle = (kart) => {
    if (!elindekiler.some(k => k.id === kart.id)) {
      setElindekiler([...elindekiler, kart]);
    }
  };

  const kartiSil = (id) => {
    setElindekiler(elindekiler.filter(k => k.id !== id));
  };

  return (
    <KartlarContext.Provider value={{ elindekiler, kartEkle, kartiSil }}>
      {children}
    </KartlarContext.Provider>
  );
};
