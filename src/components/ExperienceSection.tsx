
import { useEffect, useRef, useState } from 'react';

type Experience = {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
};

const experiences: Experience[] = [
  {
    company: "Tech Company A",
    position: "Backend Developer",
    period: "June 2023 - Present",
    location: "Remote",
    description: "Developed and maintained scalable backend services using Node.js and MongoDB. Implemented efficient algorithms for data processing and analysis.",
  },
  {
    company: "Startup B",
    position: "Software Engineer Intern",
    period: "January 2023 - May 2023",
    location: "Indore, India",
    description: "Built RESTful APIs and microservices for a fintech platform. Optimized database queries resulting in 40% performance improvement.",
  },
  {
    company: "Research Lab",
    position: "Research Assistant",
    period: "May 2022 - December 2022",
    location: "Remote",
    description: "Worked on machine learning models for natural language processing. Implemented and evaluated various algorithms for text classification.",
  },
];

const ExperienceSection = () => {
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
      id="experience"
      ref={sectionRef}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-heading">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`bg-card border border-border rounded-lg p-6 animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-primary font-medium">{exp.position}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right md:text-right">
                  <p className="text-muted-foreground">{exp.period}</p>
                  <p className="text-muted-foreground">{exp.location}</p>
                </div>
              </div>
              <p className="text-foreground/80">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
