
import { useEffect, useRef, useState } from 'react';

const platforms = [
  {
    name: "LeetCode",
    username: "snehalsaurabh",
    rating: "2000+",
    contests: "50+",
    problems: "800+",
    profile: "https://leetcode.com/snehalsaurabh/",
    logo: "https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
  },
  {
    name: "Codeforces",
    username: "snehalsaurabh",
    rating: "Specialist (1500+)",
    contests: "45+",
    problems: "700+",
    profile: "https://codeforces.com/profile/snehalsaurabh",
    logo: "https://codeforces.org/s/0/apple-icon-180x180.png"
  },
  {
    name: "AtCoder",
    username: "snehalsaurabh",
    rating: "Green (800+)",
    contests: "30+",
    problems: "300+",
    profile: "https://atcoder.jp/users/snehalsaurabh",
    logo: "https://img.atcoder.jp/assets/atcoder.png"
  },
  {
    name: "CodeChef",
    username: "snehalsaurabh",
    rating: "4★ (1800+)",
    contests: "40+",
    problems: "400+",
    profile: "https://www.codechef.com/users/snehalsaurabh",
    logo: "https://cdn.codechef.com/sites/default/files/uploads/pictures/811b20a47eac52b10c90ab82e0628e21.png"
  }
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
          Passionate about algorithmic problem-solving across multiple competitive programming platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform, index) => (
            <a 
              key={platform.name}
              href={platform.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in">
                <div className="p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">{platform.name}</h3>
                    <p className="text-muted-foreground mb-4">@{platform.username}</p>
                  </div>
                  {platform.logo && (
                    <img 
                      src={platform.logo} 
                      alt={`${platform.name} logo`}
                      className="h-10 w-10 object-contain"
                    />
                  )}
                </div>
                
                <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
                  <div className="p-4 text-center">
                    <p className="text-sm text-muted-foreground">Rating</p>
                    <p className="font-medium">{platform.rating}</p>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm text-muted-foreground">Contests</p>
                    <p className="font-medium">{platform.contests}</p>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm text-muted-foreground">Problems</p>
                    <p className="font-medium">{platform.problems}</p>
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
