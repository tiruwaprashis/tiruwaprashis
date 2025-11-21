import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Active Academy Website",
    description: "A web-based e-learning platform featuring secure authentication, role-based access, dynamic course listings, and user dashboards with efficient database management.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Authentication"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    github: "https://github.com/tiruwaprashis/ReactWebsite",
    demo: "#"
  },
  {
    title: "Blood Bank Management System",
    description: "A Laravel-based application for managing blood donations and donor eligibility with location-based search and comprehensive admin panel.",
    tags: ["Laravel", "PHP", "MySQL", "Admin Panel"],
    image: "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?w=800&h=600&fit=crop",
    github: "https://github.com/tiruwaprashis",
    demo: "#"
  },
  {
    title: "Car Rental Portal System",
    description: "Web-based car rental management system with user authentication, booking management, vehicle listings, and comprehensive admin panel.",
    tags: ["PHP", "PDO", "MySQL", "Authentication"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    github: "https://github.com/tiruwaprashis/Car-Rental-project.git",
    demo: "#"
  },
  {
    title: "Online Vital Registration System",
    description: "Digital portal for registering vital records including marriage and migration details with secure form handling and submission.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    github: "https://github.com/tiruwaprashis/onlineregistrationsystem.github.io.git",
    demo: "#"
  },
  {
    title: "Backend Admin Panel",
    description: "Custom backend admin panel built with Laravel and Voyager providing CRUD functionalities, database management, and role-based access control.",
    tags: ["Laravel", "Voyager", "CRUD", "Dashboard"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    github: "https://github.com/tiruwaprashis",
    demo: "#"
  },
  {
    title: "Animated Website",
    description: "Creative and responsive website showcasing modern UI/UX design with interactive animations, smooth transitions, and engaging visual effects.",
    tags: ["HTML", "CSS", "JavaScript", "Animations"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    github: "https://github.com/tiruwaprashis",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of web applications demonstrating full-stack development and problem-solving skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-4">
                  {project.github !== "#" && (
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
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
                      className="p-2 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
