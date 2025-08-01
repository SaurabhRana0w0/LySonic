import { Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { number: "15", label: "Years of expert experience" },
    { number: "350", label: "Projects completed successfully" },
    { number: "500", label: "Happy customers" },
    { number: "20M", label: "Total downloads" }
  ];

  return (
    <section id="about" className="py-20 bg-dark-bg text-white">
      {/* Services Bar */}
      <div className="bg-white py-6 border-y">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-12 text-dark-bg font-bold text-lg overflow-x-auto">
            <span>BRANDING</span>
            <span>SEO</span>
            <span>WEB DEVELOPMENT</span>
            <span>DESIGN</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              ABOUT US
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We are a creative studio with 15+ years of design & experience from 
              branding to web development. We craft meaningful experiences that 
              connect with your customers and grow your business. Our team of 
              experts is passionate about creating beautiful, functional, and 
              user-friendly solutions.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Our team has been helping businesses grow through strategic design, 
              branding, and digital experiences. We believe in the power of good 
              design to transform businesses and create lasting relationships 
              with customers.
            </p>
          </div>

          {/* Video Preview */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-card">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Team working"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button size="lg" className="rounded-full w-16 h-16 bg-white/20 hover:bg-white/30">
                  <Play className="h-6 w-6 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="text-4xl font-bold text-accent">{stat.number}</div>
                <ChevronDown className="h-6 w-6 text-accent ml-2" />
              </div>
              <p className="text-white/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;