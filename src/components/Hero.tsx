import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Shield, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background"
    >
      {/* Animated background elements */}
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

      <div className="container px-4 py-32 text-center relative z-10">
        <div className="space-y-8">
          {/* Floating icons */}
          <div className="flex justify-center gap-8 mb-8">
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

          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient leading-tight">
              Hi, I'm Prashis Tiruwa
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-medium">
              Full Stack Developer & Cybersecurity Specialist
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              B.Sc.CSIT student with hands-on experience in full-stack web development and
              cybersecurity. I build secure, scalable web applications and have expertise in both
              offensive and defensive security practices.
            </p>
          </div>

          <div
            className="flex gap-4 justify-center flex-wrap animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group relative overflow-hidden transition-all hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="group transition-all hover:scale-105 hover:border-primary hover:text-primary hover:shadow-lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            {[
              { value: "6+", label: "Projects" },
              { value: "2+", label: "Years Learning" },
              { value: "10+", label: "Technologies" },
              { value: "2", label: "Internships" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-md"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollToSection("projects")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
