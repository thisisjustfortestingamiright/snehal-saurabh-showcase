
import { useState, useEffect } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="pt-32 pb-12 px-6 md:px-24 flex flex-col items-center md:items-start">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-8'}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center md:text-left">
          Snehal Saurabh
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-center md:text-left">
          I make backends, machine workflows, and excel at competitive programming.
        </p>
      </div>
    </header>
  );
};

export default Header;
