
import { useEffect } from "react";
import { setupIntersectionObserver } from "@/lib/animations";
import { Layers, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: <Layers size={32} className="text-primary" />,
    title: "Thoughtful Design",
    description:
      "Every pixel is meticulously placed with intention, creating a harmonious and intuitive user experience."
  },
  {
    icon: <Sparkles size={32} className="text-primary" />,
    title: "Beautiful Details",
    description:
      "Subtle animations and micro-interactions enhance the user experience without overwhelming the senses."
  },
  {
    icon: <Zap size={32} className="text-primary" />,
    title: "Lightning Fast",
    description:
      "Optimized for speed and performance, ensuring a smooth and responsive experience on all devices."
  }
];

const Features = () => {
  useEffect(() => {
    const observer = setupIntersectionObserver();
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <p className="inline-block px-3 py-1 text-sm font-medium bg-primary/5 rounded-full mb-6 animate-on-scroll">
            Exceptional Features
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 animate-on-scroll">
            Designed with purpose. <br />
            Built with precision.
          </h2>
          <p className="text-lg text-foreground/70 animate-on-scroll">
            Our philosophy is less but better, focusing on what truly matters
            to deliver an exceptional experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-primary/5 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
