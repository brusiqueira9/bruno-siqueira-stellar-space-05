
import { Github, ExternalLink, Calendar, Star, Code2, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'Painel de Monitoramento de Servidores',
      description: 'Leitura em tempo real de serviços, toner e conectividade via SNMP com alertas automáticos. Sistema completo de monitoramento com dashboard interativo.',
      image: '/placeholder.svg',
      tech: ['JavaScript', 'Node.js', 'SNMP', 'Monitoring', 'Real-time'],
      demo: '#',
      github: '#',
      status: 'Em produção',
      stars: 24,
      date: '2024'
    },
    {
      title: 'Sistema de Gerenciamento de Chamados',
      description: 'Aplicação web completa com autenticação segura, painel administrativo, sistema de chamados técnicos e integração com banco de dados robusto.',
      image: '/placeholder.svg',
      tech: ['React', 'Node.js', 'SQL', 'Authentication', 'API REST'],
      demo: '#',
      github: '#',
      status: 'Concluído',
      stars: 18,
      date: '2024'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projetos que demonstram minha experiência prática em desenvolvimento e administração de sistemas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-0 bg-gradient-to-br from-surface-elevated/80 to-surface/60 backdrop-blur-xl shadow-lg hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Image Section with Overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 text-xs font-medium bg-accent/20 text-accent border border-accent/30 rounded-full backdrop-blur-sm">
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Project Stats */}
                  <div className="absolute top-2 right-2 flex items-center gap-2">
                    <div className="flex items-center gap-1 text-white/80">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{project.stars}</span>
                    </div>
                  </div>

                  {/* Quick Action Buttons Overlay */}
                  <div className="absolute bottom-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.demo}
                      className="p-1.5 bg-primary/20 hover:bg-primary/30 backdrop-blur-sm rounded border border-primary/30 text-primary transition-colors duration-200"
                    >
                      <Eye className="w-3 h-3" />
                    </a>
                    <a
                      href={project.github}
                      className="p-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded border border-white/20 text-white transition-colors duration-200"
                    >
                      <Code2 className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold group-hover:text-primary transition-colors duration-300 leading-tight line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-accent/10 text-accent border border-accent/20 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.demo}
                      className="px-3 py-2 bg-primary/20 hover:bg-primary/30 text-primary text-xs rounded border border-primary/30 transition-colors duration-200 flex items-center gap-1 flex-1 justify-center"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      className="px-3 py-2 bg-white/5 hover:bg-white/10 text-white/80 text-xs rounded border border-white/20 transition-colors duration-200 flex items-center gap-1 flex-1 justify-center"
                    >
                      <Github className="w-3 h-3" />
                      Código
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
