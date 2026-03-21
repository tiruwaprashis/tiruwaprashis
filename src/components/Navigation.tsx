import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

const LionIcon = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-12 h-12 fill-primary animate-pulse-slow" 
    style={{ filter: "drop-shadow(0px 0px 4px rgba(var(--primary), 0.5))" }}
  >
    {/* Geometric Lion Silhouette */}
    <path d="M50 10 L35 25 L35 40 L20 45 L25 60 L50 90 L75 60 L80 45 L65 40 L65 25 Z" fill="currentColor" opacity="0.2" />
    <path d="M50 15 L40 28 L40 42 L25 48 L30 62 L50 85 L70 62 L75 48 L60 42 L60 28 Z" fill="currentColor" />
    {/* Eyes/Features */}
    <path d="M42 45 L48 48 L42 51 Z" fill="background" />
    <path d="M58 45 L52 48 L58 51 Z" fill="background" />
    <path d="M48 65 L50 68 L52 65 Z" fill="background" />
    {/* Mane Details */}
    <rect x="48" y="10" width="4" height="10" fill="currentColor" rx="2" />
    <rect x="30" y="20" width="2" height="15" transform="rotate(-30 30 20)" fill="currentColor" rx="1" />
    <rect x="70" y="20" width="2" height="15" transform="rotate(30 70 20)" fill="currentColor" rx="1" />
  </svg>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo Section: Text Top, Lion Bottom */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              className="flex flex-col items-center group transition-transform hover:scale-105"
            >
              <span className="text-2xl font-bold text-gradient tracking-tight">
                TPSecure
              </span>
              <div className="mt-[-4px]"> {/* Slight negative margin to pull icon closer */}
                <LionIcon />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    activeSection === item.href.substring(1)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                      activeSection === item.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/tiruwaprashis" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/prashis-tiruwa-9433a0300/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" onClick={() => setIsMobileMenuOpen(false)} />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={cn(
                "text-2xl font-semibold transition-all duration-300 hover:text-primary hover:scale-110",
                isMobileMenuOpen ? "animate-fade-in-up" : ""
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
