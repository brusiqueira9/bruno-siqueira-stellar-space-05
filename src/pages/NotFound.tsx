import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center surface-card p-8 backdrop-blur-xl z-10">
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-text-primary mb-6">Oops! Página não encontrada</p>
        <a href="/" className="btn-primary">
          Voltar para Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
