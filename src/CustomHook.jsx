// CustomHook.js
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Nettoyage du listener lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Le tableau vide signifie que cela ne dépend d'aucune prop ou state, donc cela n'a besoin de s'exécuter qu'une seule fois

  return windowSize;
};

export default useWindowSize;
