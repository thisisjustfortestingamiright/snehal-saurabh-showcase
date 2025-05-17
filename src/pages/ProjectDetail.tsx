
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Project } from '../components/ProjectsSection';
import NotFound from './NotFound';

// Using the same projects data that we defined in ProjectsSection
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

// Extended descriptions for each project
const projectDetails: Record<string, { fullDescription: string, githubUrl: string, demoUrl: string }> = {
  "distributed-cache": {
    fullDescription: `
      A high-performance distributed caching system built using Go. The system supports multiple eviction policies 
      including LRU, LFU, and FIFO. It uses Redis for persistence and can scale horizontally across multiple nodes. 
      
      Key features include:
      - Distributed hash table with consistent hashing
      - Configurable replication factor
      - Automatic node discovery and failover
      - Support for various serialization formats
      - Comprehensive metrics and monitoring
      
      This project was designed to handle high-throughput scenarios where low-latency access to data is critical.
    `,
    githubUrl: "https://github.com/snehalsaurabh/distributed-cache",
    demoUrl: "https://demo.snehalsaurabh.com/distributed-cache",
  },
  "ml-workflow-engine": {
    fullDescription: `
      An engine for orchestrating and automating machine learning workflows, built with Python and TensorFlow. 
      The system allows data scientists to define complex ML pipelines that can be executed in a distributed manner.
      
      Key features include:
      - Visual workflow builder with drag-and-drop interface
      - Integration with various data sources
      - Automatic hyperparameter tuning
      - Distributed training across GPU clusters
      - Model versioning and deployment management
      - A/B testing framework for model evaluation
      
      The engine is currently being used by several data science teams to streamline their ML experimentation and deployment processes.
    `,
    githubUrl: "https://github.com/snehalsaurabh/ml-workflow-engine",
    demoUrl: "https://demo.snehalsaurabh.com/ml-workflow",
  },
  "api-gateway": {
    fullDescription: `
      A lightweight API gateway built with Node.js and Express. The gateway provides routing, authentication, 
      rate limiting, and request transformation capabilities for microservices architectures.
      
      Key features include:
      - JWT-based authentication and authorization
      - Request rate limiting with Redis
      - Circuit breaking for failing services
      - Request and response transformation
      - API versioning and documentation
      - Real-time metrics dashboard
      
      This gateway is designed to be lightweight yet powerful, making it suitable for both small and large-scale microservices deployments.
    `,
    githubUrl: "https://github.com/snehalsaurabh/api-gateway",
    demoUrl: "https://demo.snehalsaurabh.com/api-gateway",
  },
  "stock-analysis": {
    fullDescription: `
      A system for real-time analysis and visualization of stock market data. Built with Python, Pandas, and WebSocket technology, 
      this application provides traders with insights and analytics derived from market data.
      
      Key features include:
      - Real-time price tracking and alerts
      - Technical indicator calculations
      - Pattern recognition for common chart patterns
      - Sentiment analysis of financial news
      - Portfolio optimization suggestions
      - Historical backtesting of trading strategies
      
      The system processes millions of data points per day and has been used to identify trading opportunities across various market conditions.
    `,
    githubUrl: "https://github.com/snehalsaurabh/stock-analysis",
    demoUrl: "https://demo.snehalsaurabh.com/stock-analysis",
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [details, setDetails] = useState<typeof projectDetails[string] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundProject = projects.find(p => p.id === projectId);
    if (foundProject && projectId && projectId in projectDetails) {
      setProject(foundProject);
      setDetails(projectDetails[projectId]);
    }
  }, [projectId]);

  if (!project || !details) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container max-w-4xl mx-auto px-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
        
        <div className="space-y-8">
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {details.fullDescription.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a 
              href={details.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-card border border-border hover:bg-secondary transition-colors"
            >
              <Github size={20} className="mr-2" />
              View on GitHub
            </a>
            <a 
              href={details.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ExternalLink size={20} className="mr-2" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
