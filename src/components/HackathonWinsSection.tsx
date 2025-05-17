
import { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Trophy } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type HackathonWin = {
  id: string;
  title: string;
  description: string;
  date: string;
  prize: string;
  organizer: string;
  techStack: string[];
  images: string[];
};

const hackathonWins: HackathonWin[] = [
  {
    id: "smart-city-hack",
    title: "Smart City Hackathon",
    description: "Developed an IoT-based traffic management system that reduced congestion by 35% in simulated environments. Our solution used real-time data processing to optimize traffic light patterns.",
    date: "March 2024",
    prize: "$5,000",
    organizer: "TechCity Foundation",
    techStack: ["Python", "Raspberry Pi", "TensorFlow", "AWS"],
    images: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "blockchain-fintech",
    title: "Blockchain FinTech Challenge",
    description: "Created a decentralized finance platform that enables micro-loans for underserved communities. The solution included smart contracts for transparent loan management and repayment tracking.",
    date: "November 2023",
    prize: "$3,500",
    organizer: "DeFi Alliance",
    techStack: ["Solidity", "React", "Ethereum", "Web3.js"],
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "healthcare-ai",
    title: "Healthcare AI Innovation",
    description: "Built an AI-powered diagnostic assistant that helps identify early signs of diabetes with 92% accuracy. The system analyzes patient data and provides risk assessments for healthcare providers.",
    date: "August 2023",
    prize: "$7,500",
    organizer: "MedTech Innovators",
    techStack: ["Python", "PyTorch", "Flask", "Google Cloud"],
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "sustainability-challenge",
    title: "Global Sustainability Challenge",
    description: "Developed an app that connects local farmers with consumers to reduce food waste and carbon emissions from long-distance shipping. The platform includes real-time inventory tracking and dynamic pricing.",
    date: "May 2023",
    prize: "$4,000",
    organizer: "EcoTech Foundation",
    techStack: ["React Native", "Node.js", "MongoDB", "Firebase"],
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80"
    ]
  }
];

const HackathonWinsSection = () => {
  const [selectedHackathon, setSelectedHackathon] = useState<HackathonWin | null>(null);
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
      id="hackathon-wins"
      ref={sectionRef}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-heading">Hackathon Wins</h2>
        <p className="text-lg mb-8">
          Showcasing innovative solutions developed during intense coding competitions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackathonWins.map((hackathon, index) => (
            <div
              key={hackathon.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedHackathon(hackathon)}
            >
              <div className="relative h-48">
                <img 
                  src={hackathon.images[0]} 
                  alt={hackathon.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 hover:bg-primary">
                    <Trophy size={14} className="mr-1" /> Winner
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{hackathon.title}</h3>
                  <span className="text-sm text-muted-foreground">{hackathon.date}</span>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {hackathon.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-primary">{hackathon.prize}</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedHackathon(hackathon);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedHackathon} onOpenChange={(open) => !open && setSelectedHackathon(null)}>
          {selectedHackathon && (
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedHackathon.title}</DialogTitle>
              </DialogHeader>
              
              <div className="mt-4 mb-6">
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedHackathon.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${selectedHackathon.title} - image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Organizer</h4>
                  <p>{selectedHackathon.organizer}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Date</h4>
                  <p>{selectedHackathon.date}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Prize</h4>
                  <p className="text-primary font-medium">{selectedHackathon.prize}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Description</h4>
                  <p>{selectedHackathon.description}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedHackathon.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default HackathonWinsSection;
