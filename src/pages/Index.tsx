
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { setupIntersectionObserver } from "@/lib/animations";

const Index = () => {
  useEffect(() => {
    // Initialize animation observer
    const observer = setupIntersectionObserver();
    
    // Cleanup
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
