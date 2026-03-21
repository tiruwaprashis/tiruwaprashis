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

// Pure Code Lion Logo - Designed to match the uploaded image structure
const LionLogo = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-12 h-12"
    style={{ filter: "drop-shadow(0px 0px 10px rgba(212, 175, 55, 0.5))" }}
  >
    {/* Outer Mane / Circuit Pattern */}
    <path
      d="M50 5 L35 15 L25 15 L15 30 L15 50 L25 75 L50 95 L75 75 L85 50 L85 30 L75 15 L65 15 Z"
      fill="none"
      stroke="#d4af37"
      strokeWidth="2"
      className="opacity-80"
    />
    {/* Inner Lion Face */}
    <path
      d="M50 20 C40 20 32 28 32 45 C32 60 40 75 50 85 C60 75 68 60 68 45 C68 28 60 20 50 20 Z"
      fill="#d4af37"
    />
    {/* Features: Eyes & Nose */}
    <path d="M42 42 L46 45 L42 48 Z" fill="black" />
    <path d="M58 42 L54 45 L58 48 Z" fill="black" />
    <path d="M48 65 L50 68 L52 65 Z" fill="black" opacity="0.5" />
    {/* Shield Detail on Forehead */}
    <path d="M46 22 L50 18 L54 22 L50 30 Z" fill="#b8860b" />
    {/* Circuit lines inside mane */}
    <line x1="20" y1="35" x2="30" y2="35" stroke="#d4af37" strokeWidth="1" />
    <line x1="70" y1="35" x2="80" y2="35" stroke="#d4af37" strokeWidth="1" />
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/90 backdrop-blur-lg shadow-2xl py-2"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* LOGO: Lion on Top, Text Below */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              className="flex flex-col items-center group"
            >
              <LionLogo />
              <span className="text-xl font-bold tracking-widest text-gradient mt-1 transition-transform group-hover:scale-105">
                TPSECURE
              </span>
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
                    "text-xs uppercase tracking-widest font-semibold transition-colors relative group",
                    activeSection === item.href.substring(1)
                      ? "text-primary"
                      : "text-foreground/60 hover:text-foreground"
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
            <div className="hidden md:flex items-center gap-4">
              <a href="https://github.com/tiruwaprashis" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/prashis-tiruwa-9433a0300/" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
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

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500 bg-background/98 backdrop-blur-2xl",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-3xl font-bold tracking-tighter hover:text-primary transition-colors"
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
