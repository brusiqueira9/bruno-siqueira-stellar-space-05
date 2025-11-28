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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-80 pointer-events-none">
        <div className="absolute -left-10 top-10 w-64 h-64 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-3xl" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-to-tr from-accent/20 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,176,255,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.08),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.08),transparent_30%)]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-10 lg:space-y-12 relative z-10">
            {/* Roles + Logo */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-primary/80">
                <span className="surface-card px-4 py-2 rounded-full border border-primary/20 shadow-inner shadow-primary/20">
                  Disponível para projetos estratégicos
                </span>
                <span className="flex items-center gap-2 surface-card px-4 py-2 rounded-full border border-accent/20">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  Resposta em menos de 24h
                </span>
              </div>

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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
                {[
                  { label: 'Anos de experiência', value: '12+' },
                  { label: 'Projetos entregues', value: '45+' },
                  { label: 'Clientes satisfeitos', value: '98%' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="surface-card p-4 rounded-xl border border-primary/10 shadow-sm shadow-primary/10"
                  >
                    <div className="text-2xl font-semibold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-[0.2em] mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
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

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              <div className="surface-card p-4 rounded-xl border border-primary/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-semibold">
                  PT-BR
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Atuação remota Brasil &amp; Global</p>
                  <p className="text-xs text-muted-foreground/80">Horários flexíveis para squads distribuídos</p>
                </div>
              </div>
              <div className="surface-card p-4 rounded-xl border border-accent/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-semibold">
                  SLA
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Onboarding e discovery guiados</p>
                  <p className="text-xs text-muted-foreground/80">Workshops técnicos + roadmaps acionáveis</p>
                </div>
              </div>
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
