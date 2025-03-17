
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 500, 0);
      const transform = `translateY(${scrollY * 0.4}px)`;
      
      heroRef.current.style.opacity = String(opacity);
      heroRef.current.style.transform = transform;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent z-0" />
      
      <div 
        ref={heroRef}
        className="container mx-auto px-4 py-32 md:py-40 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-block px-3 py-1 text-sm font-medium bg-primary/5 rounded-full mb-6 animate-slide-down">
            Minimalist Design for Maximum Impact
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
            Elevate Your Digital Experience
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-10 animate-slide-up">
            Crafted with precision and attention to detail. Experience the perfect balance of form and function.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Button className="rounded-full px-8 py-6 text-base" size="lg">
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full px-8 py-6 text-base" 
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToFeatures}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground/60 hover:text-foreground animate-pulse transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
