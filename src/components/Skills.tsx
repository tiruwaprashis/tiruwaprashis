import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Shield, Server, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React", "WordPress", "Elementor", "UI/UX Design"]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["PHP", "Node.js", "Express.js", "Laravel", "MySQL", "MongoDB", "REST APIs"]
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: ["Ethical Hacking", "Burp Suite", "Kali Linux", "Wireshark", "ELK Stack", "Digital Forensics", "Threat Hunting"]
  },
  {
    title: "Tools & Platforms",
    icon: Database,
    skills: ["Git/GitHub", "Linux", "Windows", "MERN Stack", "Bash", "Volatility", "TCP/IP"]
  }
];

const certifications = [
  "Certified AppSec Practitioner v2 (CAP) - Aug 2025",
  "Defensive Cybersecurity Training",
  "SIEM Implementation (ELK Stack)",
  "Incident Response & Threat Hunting"
];

const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical proficiency across web development and cybersecurity domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Certifications & Training
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Languages */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            <strong>Languages:</strong> Nepali, Hindi, English
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
