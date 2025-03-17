
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Releases", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Community", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Partners", href: "#" },
        { label: "Privacy", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight text-gradient">Minimalist</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Beautifully crafted with attention to detail. A perfect balance of form and function, designed to elevate your digital experience.
            </p>
            <div className="flex space-x-4">
              {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/5 transition-colors"
                  aria-label={platform}
                >
                  <span className="sr-only">{platform}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="font-semibold text-base mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 mt-10 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Minimalist. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
