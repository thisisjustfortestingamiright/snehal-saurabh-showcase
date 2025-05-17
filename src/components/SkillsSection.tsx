
import { useEffect, useRef, useState } from 'react';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "./ui/badge";
import { Code, Database, FileCode, FlaskConical, Layers, Pen } from "lucide-react";

type SkillCategory = {
  name: string;
  icon: React.ElementType;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Languages & Tools",
    icon: Code,
    skills: ["C++", "Python", "TypeScript", "Git"]
  },
  {
    name: "Machine Learning",
    icon: FlaskConical,
    skills: ["NumPy", "Pandas", "Scikit-Learn", "PyTorch", "Feature Engineering", "LangChain", "RAG"]
  },
  {
    name: "Database & ORM",
    icon: Database,
    skills: ["MongoDB", "SQL", "PostgreSQL", "Prisma", "TypeORM"]
  },
  {
    name: "Architecture",
    icon: Layers,
    skills: ["Object-Oriented Design", "RESTful Architecture"]
  },
  {
    name: "Frontend",
    icon: Pen,
    skills: ["React", "HTML/CSS", "Tailwind CSS", "UI/UX"]
  },
  {
    name: "Backend",
    icon: FileCode,
    skills: ["Node.js", "Express.js", "API Development"]
  }
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

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
      id="skills"
      ref={sectionRef}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name} 
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Collapsible
                open={expandedCategory === category.name}
                onOpenChange={(isOpen) => {
                  setExpandedCategory(isOpen ? category.name : null);
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <CollapsibleTrigger className="text-muted-foreground hover:text-foreground transition-colors">
                    <span className="text-sm underline">
                      {expandedCategory === category.name ? "Show Less" : "Show All"}
                    </span>
                  </CollapsibleTrigger>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-2">
                  {category.skills.slice(0, 4).map(skill => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <CollapsibleContent>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.slice(4).map(skill => (
                      <Badge key={skill} variant="secondary" className="text-sm py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
