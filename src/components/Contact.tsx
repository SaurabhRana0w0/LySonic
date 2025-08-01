import { ArrowRight, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-6xl font-bold text-white mb-6">
          READY TO GROW?
        </h2>
        <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">
          It's Simple. Tell us what you're looking for, tell us another member of our team.
          We respect your business and privacy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8"
          >
            <Mail className="mr-2 h-5 w-5" />
            info@lysonic.co
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 text-lg px-8"
          >
            Contact us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">Lysonic.</div>
            <div className="flex items-center space-x-6 text-white/60">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@lysonic.co</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>New York, USA</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <span className="text-sm font-bold">f</span>
            </div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <span className="text-sm font-bold">t</span>
            </div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <span className="text-sm font-bold">in</span>
            </div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <span className="text-sm font-bold">ig</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/60 flex items-center justify-center gap-2">
            Made By{" "}
            <a 
              href="#" 
              className="text-accent hover:text-accent/80 transition-colors font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              SaurabhRana0w0©
            </a>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Contact, Footer };