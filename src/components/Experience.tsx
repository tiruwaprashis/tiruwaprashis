import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const experiences = [
  {
    type: "work",
    title: "Security Operation Center (SOC) Mentee",
    company: "Vairav Tech, Kathmandu",
    period: "March 2025 – May 2025",
    description: [
      "Gained hands-on knowledge of ethical hacking, vulnerability assessment, and network security",
      "Used tools such as Burp Suite, Kali Linux, Wireshark and ELK Stack for monitoring and analysis",
      "Demonstrated commitment to learning, collaboration, and cybersecurity best practices"
    ],
    skills: ["Burp Suite", "Kali Linux", "Wireshark", "ELK Stack"]
  },
  {
    type: "work",
    title: "Web Developer Intern",
    company: "Dotworks Technologies, Nepalgunj",
    period: "July 2024 – November 2024",
    description: [
      "Developed and maintained WordPress websites using Elementor",
      "Worked on Laravel projects including animated websites and back-end systems",
      "Built admin panels and blood bank management system"
    ],
    skills: ["WordPress", "Laravel", "Elementor", "PHP"]
  }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science & IT",
    institution: "Mahendra Multiple Campus, Nepalgunj",
    year: "2082 BS (2025 AD)",
    status: "Current"
  },
  {
    degree: "+2 Science Stream",
    institution: "Holyland English Secondary School, Nepalgunj",
    year: "2077 BS (2020 AD)",
    status: "Completed"
  },
  {
    degree: "SEE (School Leaving Certificate)",
    institution: "Shree Bhawani Secondary School, Bardiya",
    year: "2074 BS (2018 AD)",
    status: "Completed"
  }
];

const Experience = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: workRef, isVisible: workVisible } = useScrollAnimation(0.1);
  const { ref: eduRef, isVisible: eduVisible } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container px-4">
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-12 opacity-0 transition-all duration-700",
            headerVisible && "opacity-100 animate-fade-in-up"
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Work Experience */}
          <div
            ref={workRef}
            className={cn(
              "opacity-0 transition-all duration-700",
              workVisible && "opacity-100 animate-fade-in-left"
            )}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/10">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold">Work Experience</h3>
            </div>
            <div className="space-y-6 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-primary/20 hidden md:block" />

              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="hover-lift md:ml-12"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <Badge variant="secondary" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <CardDescription className="text-base font-medium">
                      {exp.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex gap-3">
                          <span className="text-primary mt-1 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div
            ref={eduRef}
            className={cn(
              "opacity-0 transition-all duration-700",
              eduVisible && "opacity-100 animate-fade-in-right"
            )}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-accent/10">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-accent/20 hidden md:block" />

              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="hover-lift md:ml-12"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <Badge variant={edu.status === "Current" ? "default" : "secondary"}>
                        {edu.year}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">{edu.institution}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
