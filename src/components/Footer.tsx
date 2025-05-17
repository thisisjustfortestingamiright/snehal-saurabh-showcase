
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border mt-16">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Snehal Saurabh</h3>
            <p className="text-muted-foreground">Backend Developer & Competitive Programmer</p>
          </div>
          <div className="flex space-x-4 mb-8 md:mb-0">
            <a href="https://github.com/snehalsaurabh" target="_blank" rel="noopener noreferrer" className="nav-link">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/snehalsaurabh" target="_blank" rel="noopener noreferrer" className="nav-link">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/snehalsaurabh" target="_blank" rel="noopener noreferrer" className="nav-link">
              <ExternalLink size={20} />
            </a>
            <a href="mailto:contact@snehalsaurabh.com" className="nav-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Snehal Saurabh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
