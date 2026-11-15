import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "WriteUps", href: "#written" },
  { label: "Contact", href: "#contact" },
];

const TiruwaPrashisLogo = () => (
  <div className="flex items-center gap-2.5 group select-none">
    {/* Custom SVG Icon combining Code Brackets, Syntax Lines, and a Teaching Pencil */}
    <svg
      width="42"
      height="34"
      viewBox="0 0 110 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
    >
      <defs>
        <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      {/* Syntax / Code lines background */}
      <g opacity="0.85">
        <rect x="30" y="22" width="14" height="3.5" rx="1.75" fill="#FBBF24" />
        <rect x="24" y="30" width="22" height="3.5" rx="1.75" fill="#34D399" />
        <rect x="18" y="38" width="12" height="3.5" rx="1.75" fill="#FBBF24" />
        <rect x="33" y="38" width="10" height="3.5" rx="1.75" fill="#34D399" />
        <rect x="22" y="46" width="20" height="3.5" rx="1.75" fill="#34D399" />
        <rect x="27" y="54" width="14" height="3.5" rx="1.75" fill="#FBBF24" />
        <rect x="31" y="62" width="10" height="3.5" rx="1.75" fill="#34D399" />

        <rect x="64" y="24" width="12" height="3.5" rx="1.75" fill="#34D399" />
        <rect x="61" y="32" width="18" height="3.5" rx="1.75" fill="#FBBF24" />
        <rect x="58" y="40" width="24" height="3.5" rx="1.75" fill="#34D399" />
        <rect x="55" y="48" width="20" height="3.5" rx="1.75" fill="#FBBF24" />
        <rect x="53" y="56" width="16" height="3.5" rx="1.75" fill="#34D399" />
      </g>

      {/* Left Angle Bracket '<' */}
      <path
        d="M32 23L10 45L32 67"
        stroke="url(#emeraldGrad)"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Forward Slash '/' */}
      <path
        d="M61 14L44 76"
        stroke="url(#amberGrad)"
        strokeWidth="7.5"
        strokeLinecap="round"
      />

      {/* Right Angle Bracket '>' stylized as a Pencil for Teaching */}
      <g>
        {/* Top half of '>' (Pencil shaft & tip pointing up-left) */}
        <path
          d="M78 23L100 45"
          stroke="url(#amberGrad)"
          strokeWidth="7.5"
          strokeLinecap="round"
        />
        {/* Pencil Tip detail at top-left of '>' */}
        <path
          d="M75.5 20.5L70 18L72.5 23.5Z"
          fill="#FDE68A"
        />
        {/* Pencil Eraser band detail */}
        <line
          x1="81"
          y1="26"
          x2="85"
          y2="22"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Bottom half of '>' */}
        <path
          d="M100 45L78 67"
          stroke="url(#amberGrad)"
          strokeWidth="7.5"
          strokeLinecap="round"
        />
      </g>
    </svg>

    {/* Wordmark with dual-tone hierarchy */}
    <span className="text-xl sm:text-2xl font-bold tracking-tight">
      <span className="text-foreground">tiruwa</span>
      <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
        prashis
      </span>
    </span>
  </div>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Safe scroll progress calculation
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
        aria-label="Primary Navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/85 backdrop-blur-md shadow-md py-3.5"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Accessible Brand Logo Link (WCAG 2.2 AA Compliant) */}
            <a
              href="#hero"
              aria-label="tiruwaprashis - Back to top"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background py-1"
            >
              <TiruwaPrashisLogo />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={cn(
                      "text-sm font-medium transition-colors relative group py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      isActive
                        ? "text-primary"
                        : "text-foreground/80 hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-0.5 bg-primary transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/tiruwaprashis"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/prashis-tiruwa-9433a0300/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button (44x44px minimum touch target) */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden min-w-[44px] min-h-[44px]"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        aria-hidden={!isMobileMenuOpen}
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
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={cn(
                "text-2xl font-semibold transition-all duration-300 px-4 py-2 rounded-md",
                "hover:text-primary hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                isMobileMenuOpen ? "animate-fade-in-up" : ""
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 mt-4">
            <Button variant="outline" size="icon" className="min-w-[44px] min-h-[44px]" asChild>
              <a
                href="https://github.com/tiruwaprashis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="min-w-[44px] min-h-[44px]" asChild>
              <a
                href="https://www.linkedin.com/in/prashis-tiruwa-9433a0300/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </>
  );
};

export default Navigation;
