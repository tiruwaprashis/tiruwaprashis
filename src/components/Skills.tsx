import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Shield, Server, Database, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React", "WordPress", "Elementor", "UI/UX Design"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["PHP", "Node.js", "Express.js", "Laravel", "MySQL", "MongoDB", "REST APIs"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: ["Ethical Hacking", "Burp Suite", "Kali Linux", "Wireshark", "ELK Stack", "Digital Forensics", "Threat Hunting"],
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    title: "Tools & Platforms",
    icon: Database,
    skills: ["Git/GitHub", "Linux", "Windows", "MERN Stack", "Bash", "Volatility", "TCP/IP"],
    color: "from-purple-500/20 to-pink-500/20"
  }
];

// Credentials only. Courses and program topics are not listed here.
const certifications = [
  "Certified AppSec Practitioner v2 (CAP) - Aug 2025",
  "Google Cybersecurity Professional",
  "AWS Academy Graduate - Cloud Foundations",
  "AWS Academy Graduate - Cloud Architecting",
  "Ethical Hacking Essentials (EHE)",
  "Cisco Introduction to Data Science"
];

const labProfiles = [
  { label: "CyberDefenders Profile", href: "https://cyberdefenders.org/p/tiruwa_prashis" },
  { label: "Blue Team Labs Online (BTLO)", href: "https://blueteamlabs.online/home/challenges?category=ALL" }
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = category.icon;

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 transition-all duration-700",
        isVisible && "opacity-100 animate-scale-in"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="hover-lift h-full group">
        <CardHeader>
          <div className={cn("w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", category.color)}>
            <Icon className="w-7 h-7 text-foreground" />
          </div>
          <CardTitle className="group-hover:text-primary transition-colors">
            {category.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Skills = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: certRef, isVisible: certVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4">
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-12 opacity-0 transition-all duration-700",
            headerVisible && "opacity-100 animate-fade-in-up"
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical proficiency across web development and cybersecurity domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Certifications */}
        <div
          ref={certRef}
          className={cn(
            "max-w-4xl mx-auto opacity-0 transition-all duration-700",
            certVisible && "opacity-100 animate-fade-in-up"
          )}
        >
          <Card className="hover-lift overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <span className="text-primary mt-1 text-xl group-hover:scale-125 transition-transform">
                      ✓
                    </span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span className="text-sm text-muted-foreground font-medium">Verified Lab Platforms:</span>
                <div className="flex flex-wrap gap-3">
                  {labProfiles.map((profile) => (
                    <Button key={profile.label} variant="secondary" size="sm" asChild>
                      <a href={profile.href} target="_blank" rel="noopener noreferrer">
                        {profile.label}
                        <ExternalLink className="w-3.5 h-3.5 ml-2" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Languages */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50">
            <span className="font-semibold">Languages:</span>
            <span className="text-muted-foreground">Nepali • Hindi • English</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
