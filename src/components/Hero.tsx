import { ChevronDown, Code, Database, Cloud } from 'lucide-react';
import logoImage from '@/assets/logo2.png';
import TypewriterEffect from './TypewriterEffect';
import SparklesText from './SparklesText';

const Hero = () => {
  const typingTexts = [
    'Transformando desafios em soluções escaláveis.',
    'Desenvolvendo arquiteturas modernas e resilientes.',
    'Criando experiências digitais de alto impacto.',
    'Conectando tecnologia e negócios com eficiência.',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-10 lg:space-y-12 relative z-10">
            {/* Roles + Logo */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-[0.7rem] sm:text-xs md:text-sm font-medium uppercase tracking-[0.25em]">
                {['Analista de TI', 'Arquiteto de Software', 'Analista de Cloud'].map((role) => (
                  <span
                    key={role}
                    className="
                      text-green-400 relative
                      after:content-[''] after:absolute after:-bottom-0.5 after:left-0
                      after:w-full after:h-[1px] after:bg-green-400/40 after:rounded-full
                      hover:text-green-300 hover:after:bg-green-300/70
                      transition-all duration-300
                    "
                  >
                    {role}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold font-inter leading-tight flex items-center justify-center lg:justify-start">
                <SparklesText sparkleCount={20}>
                  <img
                    src={logoImage}
                    alt="Bruno Logo"
                    className="
                      w-24 h-24 lg:w-40 lg:h-40 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72
                      object-contain
                      animate-pulse
                      hover:scale-110 hover:rotate-6
                      transition-all duration-500
                      drop-shadow-lg hover:drop-shadow-2xl
                      cursor-pointer
                    "
                  />
                </SparklesText>
              </h1>
            </div>

            {/* Textos / Descrição */}
            <div className="space-y-4">
              <div className="h-12 flex items-center">
                <TypewriterEffect
                  texts={typingTexts}
                  className="text-xl lg:text-2xl font-medium text-muted-foreground"
                />
              </div>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Especialista em soluções escaláveis, infraestrutura de TI e modernização de sistemas.
                Transformo conhecimento teórico em aplicações práticas que geram valor real para o negócio.
              </p>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-primary"
              >
                Ver Projetos
              </button>

              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-secondary"
              >
                Entrar em Contato
              </button>
            </div>
          </div>

          {/* Right Side - Code Preview */}
          <div className="relative">
            <div className="surface-card p-8 max-w-xl mx-auto">
              <div className="space-y-6">
                {/* Terminal Header */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    ~/portfolio/architect.ts
                  </div>
                </div>

                {/* Code Block */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-muted-foreground">
                    <span className="text-blue-400">interface</span>{' '}
                    <span className="text-yellow-400">Developer</span> {'{'}
                  </div>
                  <div className="text-muted-foreground ml-4 space-y-1">
                    <div>
                      <span className="text-red-400">name</span>:{' '}
                      <span className="text-green-400">"Bruno Siqueira"</span>;
                    </div>
                    <div>
                      <span className="text-red-400">role</span>:{' '}
                      <span className="text-green-400">"IT Analyst"</span>;
                    </div>
                    <div>
                      <span className="text-red-400">stack</span>:{' '}
                      <span className="text-purple-400">TechStack</span>;
                    </div>
                    <div>
                      <span className="text-red-400">passion</span>:{' '}
                      <span className="text-green-400">"Clean Code"</span>;
                    </div>
                  </div>
                  <div className="text-muted-foreground">{'}'}</div>
                </div>

                {/* Tech Icons */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="surface-card p-4 text-center group hover:scale-105 transition-transform">
                    <Code className="w-6 h-6 mx-auto mb-2 text-primary group-hover:text-accent transition-colors" />
                    <div className="text-xs font-medium text-muted-foreground">Web Dev</div>
                  </div>
                  <div className="surface-card p-4 text-center group hover:scale-105 transition-transform">
                    <Database className="w-6 h-6 mx-auto mb-2 text-primary group-hover:text-accent transition-colors" />
                    <div className="text-xs font-medium text-muted-foreground">Architecture</div>
                  </div>
                  <div className="surface-card p-4 text-center group hover:scale-105 transition-transform">
                    <Cloud className="w-6 h-6 mx-auto mb-2 text-primary group-hover:text-accent transition-colors" />
                    <div className="text-xs font-medium text-muted-foreground">Cloud</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown
          className="
            w-12 h-12
            text-primary
            animate-bounce
            drop-shadow-[0_0_16px_#00b0ff]
            transition-all duration-300
          "
          style={{
            filter: 'drop-shadow(0 0 16px #00b0ff)',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
