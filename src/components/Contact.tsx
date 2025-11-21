import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "tiruwaprashis4@gmail.com", href: "mailto:tiruwaprashis4@gmail.com" },
  { icon: Phone, label: "Phone", value: "+977 9824528738", href: "tel:+9779824528738" },
  { icon: MapPin, label: "Location", value: "Badhaiyatal-3, Bardiya, Nepal", href: "#" }
];

const socialLinks = [
  { icon: Github, href: "https://github.com/tiruwaprashis", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/prashis-tiruwa-9433a0300/", label: "LinkedIn" }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm actively seeking opportunities in IT Support, Technology Consulting, or Web Development. 
              Feel free to reach out for collaboration or just to say hi!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center gap-2">
                        <Icon className="w-5 h-5 text-primary" />
                        <span className="text-xs text-muted-foreground">{info.label}</span>
                        {info.href !== "#" ? (
                          <a 
                            href={info.href} 
                            className="text-sm font-medium hover:text-primary transition-colors text-center"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-center">{info.value}</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div className="flex gap-4 justify-center mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <Icon className="w-5 h-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
            
            <Button 
              size="lg" 
              asChild
              className="transition-all hover:scale-105"
            >
              <a href="mailto:tiruwaprashis4@gmail.com">Send Me a Message</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
