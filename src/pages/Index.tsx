import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Written from "@/components/Written";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    // Update scroll progress on scroll
    const updateScrollProgress = () => {
      const scrollProgress = document.querySelector('.scroll-progress') as HTMLElement;
      if (scrollProgress) {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = `${scrollPercentage}%`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <main className="min-h-screen relative">
      <Navigation />
      
      {/* Scroll Progress Bar */}
      <div className="scroll-progress fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-50 transition-all duration-150" />
      
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />

      <footer className="py-8 text-center text-muted-foreground border-t bg-background/50 backdrop-blur-sm">
        <div className="container px-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Prashis Tiruwa. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
