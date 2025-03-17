
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ease-in-out",
        isScrolled
          ? "py-4 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tight">
          <span className="text-gradient">Minimalist</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button className="rounded-full px-6">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background shadow-lg md:hidden animate-fade-in">
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="rounded-full w-full mt-2">Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
