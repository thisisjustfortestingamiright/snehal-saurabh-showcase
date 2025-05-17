
import { useEffect, useRef, useState } from 'react';

type PlatformRating = {
  platform: string;
  handle: string;
  rating: number;
  rank?: string;
  color: string;
  maxRating?: number;
  logo: string;
  url: string;
};

const ratings: PlatformRating[] = [
  {
    platform: "LeetCode",
    handle: "snehalsaurabh",
    rating: 2145,
    rank: "Guardian",
    color: "#FFA116",
    logo: "https://leetcode.com/static/images/LeetCode_logo_rvs.png",
    url: "https://leetcode.com/snehalsaurabh/",
  },
  {
    platform: "CodeForces",
    handle: "snehalsaurabh",
    rating: 1823,
    rank: "Expert",
    color: "#3B67BD",
    logo: "https://codeforces.org/s/0/images/codeforces-sponsored-by-ton.png",
    url: "https://codeforces.com/profile/snehalsaurabh",
  },
  {
    platform: "AtCoder",
    handle: "snehalS",
    rating: 1532,
    color: "#00C19A",
    logo: "https://img.atcoder.jp/assets/top/img/logo_bk.svg",
    url: "https://atcoder.jp/users/snehalS",
  },
  {
    platform: "CodeChef",
    handle: "snehal_saurabh",
    rating: 1932,
    color: "#745648",
    rank: "5★",
    logo: "https://cdn.codechef.com/images/cc-logo.svg",
    url: "https://www.codechef.com/users/snehal_saurabh",
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
            <a 
              key={platform.platform}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:-translate-y-1 duration-200"
            >
              <div 
                className="bg-card border border-border p-6 rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
                      <img 
                        src={platform.logo} 
                        alt={`${platform.platform} logo`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{platform.platform}</h3>
                  </div>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgrammingSection;
