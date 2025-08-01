import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="text-white/80 text-sm font-medium mb-4 tracking-wider">
            3,500+ Brands trust us
          </div>
          
          <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight mb-6">
            CREATIVE
            <br />
            <span className="relative">
              AGENCY
              <div className="absolute -right-16 top-4 flex space-x-2">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face')]"></div>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=32&h=32&fit=crop&crop=face')]"></div>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face')]"></div>
                </div>
              </div>
            </span>
          </h1>
          
          <p className="text-white/70 text-lg max-w-2xl mb-8 leading-relaxed">
            We help ambitious businesses like yours generate more profits by building awareness, 
            driving web traffic, connecting with customers, and growing overall sales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Our Work
            </Button>
          </div>
        </div>
        
        {/* Creative visual elements */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="relative">
            <div className="w-80 h-60 bg-gradient-card rounded-3xl p-6 transform rotate-6">
              <div className="w-full h-full bg-white/10 rounded-2xl"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-60 h-40 bg-gradient-primary rounded-3xl transform -rotate-12 opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;