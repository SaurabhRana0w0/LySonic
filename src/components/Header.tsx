import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-white text-xl font-bold">
          Lysonic.
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-accent transition-colors">
            Home
          </a>
          <a href="#services" className="text-white hover:text-accent transition-colors">
            Services
          </a>
          <a href="#projects" className="text-white hover:text-accent transition-colors">
            Projects
          </a>
          <a href="#about" className="text-white hover:text-accent transition-colors">
            About Us
          </a>
        </div>
        
        <Button 
          className="bg-white text-primary hover:bg-white/90"
          size="sm"
        >
          Contact us
        </Button>
      </nav>
    </header>
  );
};

export default Header;