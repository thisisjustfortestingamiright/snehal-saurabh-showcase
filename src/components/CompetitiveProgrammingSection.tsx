
import { useEffect, useRef, useState } from 'react';

type PlatformRating = {
  platform: string;
  handle: string;
  rating: number;
  rank?: string;
  color: string;
  maxRating?: number;
};

const ratings: PlatformRating[] = [
  {
    platform: "LeetCode",
    handle: "snehalsaurabh",
    rating: 2145,
    rank: "Guardian",
    color: "#FFA116",
  },
  {
    platform: "CodeForces",
    handle: "snehalsaurabh",
    rating: 1823,
    rank: "Expert",
    color: "#3B67BD",
  },
  {
    platform: "AtCoder",
    handle: "snehalS",
    rating: 1532,
    color: "#00C19A",
  },
  {
    platform: "CodeChef",
    handle: "snehal_saurabh",
    rating: 1932,
    color: "#745648",
    rank: "5★",
  },
];

const CompetitiveProgrammingSection = () => {
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
      id="competitive-programming"
      ref={sectionRef}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-heading">Competitive Programming</h2>
        <p className="text-lg mb-8">
          I regularly participate in programming contests across different platforms to sharpen my problem-solving skills and algorithmic thinking.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ratings.map((platform, index) => (
            <div 
              key={platform.platform} 
              className="bg-card border border-border p-6 rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{platform.platform}</h3>
                {platform.rank && (
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-medium" 
                    style={{ backgroundColor: `${platform.color}30`, color: platform.color }}
                  >
                    {platform.rank}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground mb-2">@{platform.handle}</p>
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span>Rating</span>
                  <span className="font-semibold" style={{ color: platform.color }}>{platform.rating}</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="h-2 rounded-full" 
                    style={{ 
                      width: `${Math.min(100, (platform.rating / 3000) * 100)}%`,
                      backgroundColor: platform.color 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgrammingSection;
