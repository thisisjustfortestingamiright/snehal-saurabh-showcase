
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="pt-32 pb-12 px-6 md:px-24">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-8'}`}>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 border-2 border-primary">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=256&q=80" alt="Snehal Saurabh" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center md:text-left">
              Snehal Saurabh
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-center md:text-left">
              I make backends, machine learning workflows, and excel at competitive programming.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
