
import { Github, Linkedin, Mail, Home, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Improved X icon (Twitter/X) component
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16.99 2H21l-6.99 9.938V21h-4.018v-9.062L3 2h4.018l4.988 7.138L16.99 2z" />
  </svg>
);

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex justify-center px-4 py-2">
        <div className="bg-card/80 backdrop-blur-lg border border-border rounded-full px-6 py-3 flex items-center gap-4 md:gap-6">
          <Link to="/" className="nav-link">
            <Home size={20} />
          </Link>
          <a href="https://github.com/snehalsaurabh" target="_blank" rel="noopener noreferrer" className="nav-link">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/snehalsaurabh" target="_blank" rel="noopener noreferrer" className="nav-link">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/snehalsaurabh" target="_blank" rel="noopener noreferrer" className="nav-link">
            <XIcon width={20} height={20} />
          </a>
          <a href="mailto:contact@snehalsaurabh.com" className="nav-link">
            <Mail size={20} />
          </a>
          <Link to="/blog" className="nav-link">
            <span className="font-medium">Blog</span>
          </Link>
          <button onClick={toggleTheme} className="nav-link">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
