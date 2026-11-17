import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Shield, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

// Rotating photo with rings, used on mobile and desktop.
const Photo = ({ size, zoom }: { size: string; zoom?: boolean }) => (
  <div className="relative group">
    <div className="absolute -inset-4 border-2 border-dashed border-primary/40 rounded-full animate-spin-slow opacity-60 shadow-[0_0_20px_rgba(var(--primary),0.3)]"></div>
    <div className="absolute -inset-8 border-2 border-accent/30 rounded-full animate-spin-reverse border-t-transparent border-b-transparent"></div>
    <div className={`relative ${size} rounded-full overflow-hidden border-4 border-background shadow-2xl z-10 bg-muted`}>
      <img
        src="/Pi7_PassportSize pic.jpeg"
        alt="Prashis Tiruwa"
        className={`w-full h-full object-cover ${zoom ? "transition-transform duration-700 group-hover:scale-110" : ""}`}
      />
    </div>
    <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full -z-10 animate-pulse"></div>
  </div>
);

// Only numbers that can be checked on the lab platforms and in the work history.
const stats = [
  { value: "6", label: "Projects" },
  { value: "2", label: "Internships" },
  { value: "7", label: "CyberDefenders labs" },
  { value: "11", label: "Blue Team Labs challenges" },
];

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background pt-20"
    >
      {/* Background glow that follows the mouse */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
      </div>

      <div className="container mx-auto px-10 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-left animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Available for New Opportunities</span>
            </div>

            <div className="flex justify-center md:justify-start gap-8 mb-8">
              <div className="animate-float" style={{ animationDelay: "0s" }}>
                <Code2 className="w-12 h-12 text-primary opacity-60" />
              </div>
              <div className="animate-float" style={{ animationDelay: "0.5s" }}>
                <Shield className="w-12 h-12 text-accent opacity-60" />
              </div>
              <div className="animate-float" style={{ animationDelay: "1s" }}>
                <Sparkles className="w-12 h-12 text-primary opacity-60" />
              </div>
            </div>

            {/* Mobile photo */}
            <div className="md:hidden flex flex-col items-center mt-12 mb-12">
              <Photo size="w-60 h-60" />
            </div>

            <div className="mt-12 md:mt-0">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Hi, I'm <span className="text-gradient">Prashis</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                A B.Sc. CSIT graduate. I build{" "}
                <span className="text-foreground font-medium">web apps</span> with Laravel and
                MERN, and I practise{" "}
                <span className="text-foreground font-medium">blue-team investigation</span> on
                CyberDefenders and Blue Team Labs Online.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection("projects")} className="group">
                  View My Work
                  <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop photo */}
          <div className="hidden md:flex w-full md:w-1/2 justify-center items-center animate-fade-in-right">
            <Photo size="w-80 h-80" zoom />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20 animate-fade-in-up">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
