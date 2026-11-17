import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

// Edit this list to change the section. `note` is optional.
const projects = [
  {
    title: "Active Academy Website",
    description:
      "The frontend of an e-learning site, written in React. I built the interface only; the backend is under process.",
    tags: ["React", "MongoDB", "Express", "Node.js"],
    note: "Built with AI assistance.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    github: "https://github.com/tiruwaprashis/ReactWebsite",
    demo: "#"
  },
  {
    title: "Blood Bank Management System",
    description:
      "Donors register with a unique mobile number. After a donation they become eligible again in 3 months, tracked by an eligible_at date that admins manage in a Voyager backend.",
    tags: ["Laravel", "PHP", "MySQL", "Voyager"],
    note: "Built with AI assistance.",
    image: "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?w=800&h=600&fit=crop",
    github: "https://github.com/tiruwaprashis/Blood-Bank",
    demo: "#"
  },
  {
    title: "Car Rental Portal System",
    description:
      "7th-semester project. Users search cars by date, city and district and book them; admins manage vehicles and bookings.",
    tags: ["PHP", "PDO", "MySQL", "Apache"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    github: "https://github.com/tiruwaprashis/Car-Rental-project",
    demo: "#"
  },
  {
    title: "Online Vital Registration System",
    description:
      "A portal for registering marriage and migration records, built with HTML, CSS, JavaScript and PHP.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    note: "Built with AI assistance.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    github: "https://github.com/tiruwaprashis/onlineregistrationsystem.github.io",
    demo: "#"
  },
  {
    title: "Backend Admin Panel",
    description:
      "An admin panel built with Laravel and Voyager, with CRUD pages, database management and role-based access.",
    tags: ["Laravel", "Voyager", "CRUD", "Dashboard"],
    note: "Built with AI assistance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    github: "https://github.com/tiruwaprashis/backend-website",
    demo: "#"
  },
  {
    title: "Animated Website",
    description:
      "A responsive website with interactive animations and smooth transitions.",
    tags: ["HTML", "CSS", "JavaScript", "Animations"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    github: "https://github.com/tiruwaprashis/Animated-website",
    demo: "#"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 transition-all duration-700",
        isVisible && "opacity-100 animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="overflow-hidden group hover-lift h-full">
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform shadow-lg"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform shadow-lg"
                aria-label="View live demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <CardHeader>
          <CardTitle className="group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
          {project.note && (
            <p className="text-xs italic text-muted-foreground pt-1">{project.note}</p>
          )}
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div
          ref={ref}
          className={cn(
            "text-center mb-12 opacity-0 transition-all duration-700",
            isVisible && "opacity-100 animate-fade-in-up"
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Web projects, each linked to its code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
