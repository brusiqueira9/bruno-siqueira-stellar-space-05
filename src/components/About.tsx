
import { Code2, Cpu, Globe, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '5+', label: 'Anos de Experiência', icon: Code2 },
    { number: '50+', label: 'Projetos Entregues', icon: Cpu },
    { number: '24/7', label: 'Dedicação Total', icon: Globe }
  ];

  const values = [
    {
      title: 'Código Limpo',
      description: 'Clareza e manutenção escalável',
      icon: '🧹'
    },
    {
      title: 'Arquitetura Sólida',
      description: 'Estrutura técnica sustentável',
      icon: '🧱'
    },
    {
      title: 'Evolução Contínua',
      description: 'Sempre aprendendo e aplicando',
      icon: '🔄'
    },
    {
      title: 'Mentalidade DevOps',
      description: 'Conectando desenvolvimento e operação com fluidez',
      icon: '⚙️'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Sobre <span className="gradient-text">Mim</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Sou <span className="text-foreground font-semibold">Analista de TI</span> com 3 anos de experiência 
                  em desenvolvimento web, suporte técnico e administração de sistemas. Pós-graduado em Arquitetura 
                  de Software e atualmente cursando MBA em Arquitetura de Microsserviços, atuo com soluções escaláveis, 
                  resilientes e modernas.
                </p>

                <p>
                  Tenho perfil técnico, estratégico e colaborativo, voltado para eficiência, performance e impacto 
                  real por meio da tecnologia.
                </p>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">Santana da Vargem, Minas Gerais</span>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Meus Valores</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="surface-card p-6 group hover:scale-105 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{value.icon}</div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {value.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Stats & Visual */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="surface-card p-8 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl"></div>
                <div className="relative w-full h-full surface-card rounded-full p-2 border-2 border-primary/20">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center border border-white/10">
                    <div className="text-6xl">💻</div>
                  </div>
                </div>
                
                {/* Status Indicator */}
                <div className="absolute -bottom-2 -right-2 flex items-center gap-2 surface-card px-3 py-1 rounded-full border border-accent/20">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-accent">Online</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">Bruno Siqueira</h3>
                <p className="text-accent font-medium">Analista de TI | Arquiteto de Software</p>
                <p className="text-sm text-muted-foreground">Building scalable solutions with clean architecture</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="surface-card p-6 group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
