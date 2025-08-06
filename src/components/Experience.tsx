
import { Download, Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Analista de Suporte de TI',
      company: 'AgroCP',
      period: 'jan/2023 – atual',
      location: 'Três Pontas, MG',
      responsibilities: [
        'Suporte a sistemas, migração de recursos, manutenção de servidores.'
      ]
    },
    {
      title: 'Assistente de TI',
      company: 'AgroCP',
      period: 'ago/2022 – jan/2023',
      location: 'Três Pontas, MG',
      responsibilities: [
        'Suporte técnico geral e operação de sistemas.'
      ]
    },
    {
      title: 'Técnico de TI',
      company: 'Autônomo',
      period: '2021',
      location: 'Santana da Vargem, MG',
      responsibilities: [
        'Atendimento técnico, suporte remoto e manutenção.'
      ]
    }
  ];

  const education = [
    {
      title: 'MBA em Arquitetura de Microsserviços',
      institution: 'Anhanguera',
      period: '2025–2026',
      status: 'Em andamento'
    },
    {
      title: 'Pós-graduação em Arquitetura de Software',
      institution: 'Anhanguera',
      period: '2025',
      status: 'Concluído'
    },
    {
      title: 'Graduação em Computação em Nuvem',
      institution: 'UNOPAR',
      period: '2022–2024',
      status: 'Concluído'
    }
  ];

  return (
    <section id="curriculum" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Download Button */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meu <span className="gradient-text">Currículo</span>
          </h2>
          <button className="btn-primary flex items-center gap-2 mx-auto">
            <Download className="w-4 h-4" />
            Download CV
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Summary - Compact */}
          <div className="lg:col-span-1">
            <Card className="border-0 bg-gradient-to-br from-surface-elevated/80 to-surface/60 backdrop-blur-xl shadow-lg">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto relative">
                    <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-full p-0.5">
                      <div className="w-full h-full bg-surface rounded-full flex items-center justify-center text-2xl">
                        👨‍💻
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">BRUNO GABRIEL SIQUEIRA</h3>
                    <p className="text-accent font-medium text-sm mb-3">Analista de TI | Arquiteto de Software</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Especialista em soluções técnicas, automação e modernização de infraestrutura.
                    </p>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <MapPin className="w-3 h-3 text-primary" />
                      <span>Santana da Vargem, MG</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Calendar className="w-3 h-3 text-primary" />
                      <span>Nascido em 1998</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience and Education - Side by Side */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold gradient-text">EXPERIÊNCIA</h3>
              </div>

              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <Card key={index} className="border border-primary/10 bg-surface-elevated/50 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div>
                          <h4 className="text-sm font-bold text-foreground leading-tight">{exp.title}</h4>
                          <p className="text-primary font-medium text-sm">{exp.company}</p>
                        </div>
                        
                        <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <div className="pt-1">
                          {exp.responsibilities.map((resp, idx) => (
                            <p key={idx} className="text-xs text-muted-foreground leading-relaxed">
                              {resp}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold gradient-text">FORMAÇÃO</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="border border-accent/10 bg-surface-elevated/50 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div>
                          <h4 className="text-sm font-bold text-foreground leading-tight">{edu.title}</h4>
                          <p className="text-accent font-medium text-sm">{edu.institution}</p>
                        </div>
                        
                        <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            <span className="text-accent">{edu.status}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
