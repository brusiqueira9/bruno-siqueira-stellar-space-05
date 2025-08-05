
import { 
  SiHtml5,
  SiCss3, 
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiDocker,
  SiLinux,
  SiMysql,
  SiGit,
  SiGithubactions
} from 'react-icons/si';
import { FaWindows } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'HTML', Icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', Icon: SiCss3, color: '#1572B6' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
    { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
    { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
    { name: 'Linux Server', Icon: SiLinux, color: '#FCC624' },
    { name: 'Windows Server', Icon: FaWindows, color: '#0078D4' },
    { name: 'SQL', Icon: SiMysql, color: '#4479A1' },
    { name: 'Git', Icon: SiGit, color: '#F05032' },
    { name: 'CI/CD', Icon: SiGithubactions, color: '#2088FF' }
  ];

  // Duplicar o array para efeito infinito
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stack <span className="gradient-text">Tecnológica</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias que utilizo para criar soluções robustas e escaláveis
          </p>
        </div>

        {/* Scrolling Tech Stack */}
        <div className="relative">
          <div className="overflow-hidden mask-gradient">
            <div className="animate-scroll flex gap-8 py-8">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-none group"
                >
                  <div className="surface-card p-6 min-w-[200px] hover:scale-105 transform transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <div className="text-center space-y-4">
                      <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg border border-white/20">
                          <skill.Icon 
                            className="w-10 h-10" 
                            style={{ color: skill.color }}
                          />
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Tech Icons Background */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="animate-float-slow absolute top-20 left-10 text-6xl">💻</div>
          <div className="animate-float-medium absolute top-40 right-20 text-4xl">⚡</div>
          <div className="animate-float-fast absolute bottom-20 left-1/4 text-5xl">🚀</div>
          <div className="animate-float-slow absolute bottom-40 right-1/3 text-4xl">🔧</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
