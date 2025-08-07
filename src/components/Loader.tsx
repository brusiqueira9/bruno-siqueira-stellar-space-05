import logoImage from '@/assets/logo.png';

const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none bg-background">
    <img
      src={logoImage}
      alt="Carregando..."
      className="w-60 h-60 animate-pulse-drop"
      style={{ background: 'transparent' }}
    />
  </div>
);

export default Loader;