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




// src/components/Hero.tsx

return (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background pt-20"
  >
    {/* Animated background elements (Keep your existing mouse-follow div here) */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
       {/* ... your existing mouse follow div ... */}
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT SIDE: Text Content */}
        <div className="w-full md:w-1/2 text-left animate-fade-in-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Available for New Opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-gradient">Prashis</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            A B.Sc.CSIT graduate specializing in <span className="text-foreground font-medium">Full-Stack Development</span> and 
            <span className="text-foreground font-medium"> Cybersecurity</span>. 
            Building secure, high-performance web applications.
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

        {/* RIGHT SIDE: Animated Shield Picture */}
        <div className="w-full md:w-1/2 flex justify-center items-center animate-fade-in-right">
          <div className="relative group">
            {/* Outer Rotating Shield (Dashed) */}
            <div className="absolute -inset-4 border-2 border-dashed border-primary/40 rounded-full animate-[spin_10s_linear_infinite] opacity-60 shadow-[0_0_20px_rgba(var(--primary),0.3)]"></div>
            
            {/* Inner Rotating Shield (Inverse) */}
            <div className="absolute -inset-8 border-2 border-accent/30 rounded-full animate-[spin_15s_linear_infinite_reverse] border-t-transparent border-b-transparent"></div>

            {/* Profile Picture Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl z-10 bg-muted">
              <img 
                src="/Pi7_Passport_Photo (1).jpeg" 
                alt="Prashis Tiruwa" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* High-Tech Glow Effect */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full -z-10 animate-pulse"></div>
          </div>
        </div>

      </div>

      {/* Stats Section (Move your existing stats map here) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20 animate-fade-in-up">
        {/* ... your existing stats .map() ... */}
      </div>
    </div>
  </section>
);







const Hero = () => {
  return null; // The code below this will be ignored by the browser

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
);
  

};

export default Hero;
