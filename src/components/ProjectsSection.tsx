
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: "distributed-cache",
    title: "Distributed Cache System",
    description: "A high-performance distributed caching system with support for various eviction policies.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80",
    technologies: ["Go", "Redis", "Docker"],
  },
  {
    id: "ml-workflow-engine",
    title: "ML Workflow Engine",
    description: "An engine for orchestrating and automating machine learning workflows.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "TensorFlow", "Kubernetes"],
  },
  {
    id: "api-gateway",
    title: "API Gateway",
    description: "A lightweight API gateway with routing, authentication, and rate limiting features.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80",
    technologies: ["Node.js", "Express", "JWT"],
  },
  {
    id: "stock-analysis",
    title: "Real-time Stock Analysis",
    description: "A system for real-time analysis and visualization of stock market data.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "Pandas", "WebSocket"],
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              className="group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="project-card h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
