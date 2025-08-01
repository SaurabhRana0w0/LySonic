import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Lysonic transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations. The team was professional, responsive, and delivered exceptional results.",
      author: "Christine Smith",
      role: "Marketing Director",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      highlight: true
    },
    {
      text: "The website development project was handled with utmost professionalism. Great communication throughout the process and the final product was exactly what we envisioned.",
      author: "Michael Johnson",
      role: "CEO",
      company: "StartupXYZ",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      highlight: false
    },
    {
      text: "Outstanding UI/UX design work! The team really understood our vision and created something beautiful and functional. Highly recommend their services.",
      author: "Amanda Black",
      role: "Product Manager", 
      company: "InnovateCo",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      highlight: false
    },
    {
      text: "Exceptional service and creative solutions. The branding package they delivered helped us stand out in our competitive market. Thank you for the amazing work!",
      author: "David Wilson",
      role: "Founder",
      company: "CreativeHub",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-dark-bg text-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-5xl font-bold">
            TESTIMONIALS
          </h2>
          <div className="hidden md:flex space-x-4">
            <Button 
              size="icon"
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              size="icon"
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`p-8 rounded-3xl ${
                testimonial.highlight 
                  ? 'bg-gradient-card' 
                  : 'bg-dark-card border border-dark-border'
              }`}
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg leading-relaxed mb-8 text-white/90">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-white/60 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;