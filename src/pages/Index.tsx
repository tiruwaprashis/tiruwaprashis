import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      
      <footer className="py-6 text-center text-muted-foreground border-t">
        <div className="container px-4">
          <p>&copy; {new Date().getFullYear()} Prashis Tiruwa. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
