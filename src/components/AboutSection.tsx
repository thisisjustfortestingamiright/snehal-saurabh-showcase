
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
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
      id="about"
      ref={sectionRef}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-heading">About</h2>
        <div className="space-y-6">
          <p className="text-lg">
            I'm a 21-year-old developer from Indore, India, passionate about building robust backend systems and creating efficient machine workflows.
          </p>
          <p className="text-lg">
            When I'm not coding, I enjoy solving algorithmic problems on competitive programming platforms, constantly pushing my problem-solving abilities to new heights.
          </p>
          <p className="text-lg">
            My approach combines technical expertise with creative thinking, allowing me to tackle complex challenges with innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
