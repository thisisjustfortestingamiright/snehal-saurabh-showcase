
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="pt-32 pb-12 px-6 container mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-8'}`}>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-center md:justify-start max-w-4xl mx-auto">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 border-2 border-primary">
            <AvatarImage src="/lovable-uploads/bc5a38ac-2abd-472c-b5c8-45845924b29e.png" alt="Snehal Saurabh" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              Snehal Saurabh
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              I make backends, machine learning workflows, and excel at competitive programming.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
