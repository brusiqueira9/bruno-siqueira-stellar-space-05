import { Github, ExternalLink, Calendar, Star, Code2, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
      {
      title: 'Site Institucional AgroCP',
      description: 'Site institucional responsivo da AgroCP, com páginas de produtos, história e sustentabilidade, além de formulário de contato integrado e armazenamento no Firebase.',
      image: '/src/assets/projects/siteagrocp.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Firebase'],
      demo: 'https://agrocp.agr.br/',
      github: '#',
      status: 'Em produção',
      stars: 24,
      date: '2024'
    },

    {
    title: 'Expense Guru - Controle Financeiro',
    description: 'Aplicação web para controle financeiro pessoal com dashboard interativo, gestão de receitas, despesas e metas, usando Supabase e interface responsiva.',
    image: '/src/assets/projects/expenseguru.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Shadcn/UI'],
    demo: 'https://guruexpense.netlify.app/',
    github: 'https://github.com/brusiqueira9/expense-guru-supabase',
    status: 'Concluído',
    stars: 18,
    date: '2024'
  },
  
  {
  title: 'App Chama Motorista',
  description: 'Sistema web logístico para anunciar motoristas via voz com nome, placa e tipo de operação, armazenando chamados recentes no navegador para reuso rápido.',
  image: '/src/assets/projects/chamamotorista.png',
  tech: ['HTML', 'CSS', 'JavaScript', 'Web Speech API', 'LocalStorage'],
  demo: 'https://chamamotorista.netlify.app/',
  github: 'https://github.com/brusiqueira9/chamada_motorista',
  status: 'Concluído',
  stars: 18,
  date: '2024'
},

{
  title: 'Monitoramento de Rede',
  description: 'Sistema para monitoramento contínuo de dispositivos e impressoras com alertas por e-mail, logs, agendamentos e notificações em tempo real, desenvolvido para a AgroCP Filial.',
  image: '/src/assets/projects/monitoramentoderede.png',
  tech: ['Node.js', 'Express', 'Sequelize', 'Socket.io', 'JWT', 'Docker'],
  demo: 'https://www.linkedin.com/posts/bruno-siqueiratec_tenho-o-prazer-de-compartilhar-que-pensando-activity-7268052233202638848-6L-s?utm_source=share&utm_medium=member_desktop',
  github: '',
  status: 'Concluído',
  stars: 18,
  date: '2024'
},

{
  title: 'Ficha de reserva de hotel',
  description: 'Sistema para padronizar reservas de hotel com geração automática de PDFs personalizados com a marca AgroCP, facilitando a comunicação com hotéis parceiros.',
  image: '/src/assets/projects/fichareservahotel.png',
  tech: ['HTML', 'CSS', 'JavaScript', 'jsPDF'],
  demo: 'https://ficha-reserva-hotel.netlify.app/',
  github: 'https://github.com/brusiqueira9/ficha-reserva-hotel',
  status: 'Concluído',
  stars: 18,
  date: '2024'
},

{
  title: 'IAC - Automação de Gerenciamento de Usuários e Diretórios no Linux',
  description: 'Script Bash para automatizar a criação de usuários, grupos e diretórios no Linux, com permissões e senhas definidas, facilitando a administração do sistema.',
  image: '/src/assets/projects/IAClinux.png',
  tech: ['Bash', 'Shell Script', 'Linux'],
  demo: '',
  github: 'https://github.com/brusiqueira9/linux-projeto1-iac',
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
              className="surface-card border border-accent/10 rounded-2xl shadow-md hover:shadow-[0_0_24px_0_rgba(0,176,255,0.35)] transition-all duration-300 group"
            >
              <CardContent className="p-0">
                {/* Imagem sem caixa */}
                <div className="flex justify-center items-center pt-8 pb-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-40 lg:h-44 xl:h-56 object-contain transition-transform duration-300 group-hover:scale-105"
                    style={{ background: "transparent" }}
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-6 space-y-5">
                  <h3 className="text-xl md:text-2xl font-extrabold group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed line-clamp-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-semibold surface-card border border-accent/20 rounded-full shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Botões */}
                  <div className="flex gap-3 mt-4">
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-bold border border-primary/20 transition-all duration-200 text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Demo
                      </a>
                    )}
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-accent/10 hover:bg-accent/20 text-accent font-bold border border-accent/20 transition-all duration-200 text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                        Código
                      </a>
                    )}
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
