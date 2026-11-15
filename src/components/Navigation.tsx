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
  <div className="flex items-center gap-2 sm:gap-2.5 group select-none">
    {/* Responsive SVG Mark: Shield + Clean Code Chevrons (Dot Removed) */}
    <svg
      width="32"
      height="32"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 sm:w-[36px] sm:h-[36px] transition-transform duration-300 group-hover:scale-105"
    >
      <defs>
        <linearGradient id="siteBrandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
        <linearGradient id="siteBrandBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.16" />
        </linearGradient>
      </defs>

      {/* Outer Shield Perimeter */}
      <path
        d="M20 3.5L33 8.8V19.2C33 27.9 27.4 35.1 20 37.5C12.6 35.1 7 27.9 7 19.2V8.8L20 3.5Z"
        fill="url(#siteBrandBg)"
        stroke="url(#siteBrandGrad)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />

      {/* Left Code Chevron '<' */}
      <path
        d="M17 14L11 20L17 26"
        stroke="#0F172A"
        className="dark:stroke-slate-100"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Code Chevron '>' */}
      <path
        d="M23 14L29 20L23 26"
        stroke="url(#siteBrandGrad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    {/* Fully Uppercase, Bolder Wordmark with Responsive Scaling */}
    <span className="text-base sm:text-lg md:text-xl font-extrabold tracking-wider leading-none flex items-baseline uppercase">
      <span className="text-slate-900 dark:text-slate-100 font-black">TIRUWA</span>
      <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent font-black ml-1">
        PRASHIS
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

      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

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
            ? "bg-background/85 backdrop-blur-md shadow-sm border-b border-border/50 py-3.5"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Accessible Brand Logo Link */}
            <a
              href="#hero"
              aria-label="TIRUWA PRASHIS - Back to top"
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
                        : "text-foreground/75 hover:text-foreground"
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
            <div className="hidden md:flex items-center gap-2">
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

            {/* Mobile Menu Button */}
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
            <Button
              variant="outline"
              size="icon"
              className="min-w-[44px] min-h-[44px]"
              asChild
            >
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
            <Button
              variant="outline"
              size="icon"
              className="min-w-[44px] min-h-[44px]"
              asChild
            >
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
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-700 to-sky-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </>
  );
};

export default Navigation;
