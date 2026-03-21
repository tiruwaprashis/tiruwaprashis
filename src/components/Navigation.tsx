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

// Professional Geometric Lion SVG - Mimics the logo provided
const LionIcon = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-10 h-10 fill-[#d97706] transition-all duration-500 hover:scale-110" 
    style={{ filter: "drop-shadow(0px 0px 8px rgba(217, 119, 6, 0.4))" }}
  >
    {/* Outer Shield/Mane Shape */}
    <path d="M50 5 L30 20 L30 45 L20 50 L25 70 L50 95 L75 70 L80 50 L70 45 L70 20 Z" opacity="0.15" />
    {/* Main Lion Head Face */}
    <path d="M50 15 L38 28 L38 45 L25 52 L32 68 L50 88 L68 68 L75 52 L62 45 L62 28 Z" />
    {/* Eye Silhouettes */}
    <path d="M42 48 L48 51 L42 54 Z" fill="black" opacity="0.6" />
    <path d="M58 48 L52 51 L58 54 Z" fill="black" opacity="0.6" />
    {/* Nose/Muzzle detail */}
    <path d="M47 68 L50 72 L53 68 Z" fill="black" opacity="0.4" />
    {/* Circuit-style Mane Accents */}
    <rect x="48" y="10" width="4" height="12" rx="1" />
    <rect x="32" y="22" width="2" height="18" transform="rotate(-35 32 22)" />
    <rect x="68" y="22" width="2" height="18" transform="rotate(35 68 22)" />
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
            {/* Logo: TPSecure on Top, Lion Icon Bottom */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              className="flex flex-col items-center group transition-transform"
            >
              <span className="text-2xl font-bold text-gradient tracking-tight leading-none mb-1">
                TPSecure
              </span>
              <LionIcon />
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
                      activeSection === item.href.substring(1)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/tiruwaprashis"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/prashis-tiruwa-9433a0300/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
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
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
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
                "text-2xl font-semibold transition-all duration-300",
                "hover:text-primary hover:scale-110",
                isMobileMenuOpen
                  ? "animate-fade-in-up"
                  : ""
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 mt-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/tiruwaprashis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/prashis-tiruwa-9433a0300/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-50 transition-all duration-150"
        style={{
          width: `${(typeof window !== 'undefined') ? ((window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight)) * 100 : 0}%`
        }}
      />
    </>
  );
};

export default Navigation;
