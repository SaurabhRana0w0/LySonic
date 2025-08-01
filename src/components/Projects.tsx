import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Brand Identity Design",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop"
    },
    {
      title: "Mobile App UI/UX",
      category: "UI/UX Design", 
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
    },
    {
      title: "E-commerce Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      title: "Creative Portfolio",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-bg text-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-5xl font-bold">
            OUR PROJECT
          </h2>
          <div className="hidden md:flex space-x-4">
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10"
            >
              All Projects
            </Button>
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10"
            >
              Branding
            </Button>
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10"
            >
              Web Design
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-dark-card cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-accent text-sm font-medium mb-1">{project.category}</p>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-accent hover:bg-accent/90">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;