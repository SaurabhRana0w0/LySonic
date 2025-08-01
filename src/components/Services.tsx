import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Branding & Identity",
      description: "Complete brand identity design including logo, colors, typography, and brand guidelines."
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies and best practices."
    },
    {
      title: "UI/UX Design",
      description: "User-centered design approach to create intuitive and engaging digital experiences.",
      featured: true
    },
    {
      title: "Consulting & Training",
      description: "Strategic guidance and team training to help your business grow and succeed."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-5xl font-bold text-white">
            OUR SERVICES
          </h2>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 hidden md:flex"
          >
            Discover more
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-3xl transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer ${
                service.featured 
                  ? 'bg-white text-dark-bg' 
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className={`text-lg leading-relaxed max-w-2xl ${
                    service.featured ? 'text-dark-bg/70' : 'text-white/70'
                  }`}>
                    {service.description}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ml-8 ${
                  service.featured 
                    ? 'bg-dark-bg text-white' 
                    : 'bg-white/20 text-white group-hover:bg-white group-hover:text-dark-bg'
                } transition-all duration-300`}>
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;