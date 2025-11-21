import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const contactInfo = [
  { icon: Mail, label: "Email", value: "tiruwaprashis4@gmail.com", href: "mailto:tiruwaprashis4@gmail.com" },
  { icon: Phone, label: "Phone", value: "+977 9824528738", href: "tel:+9779824528738" },
  { icon: MapPin, label: "Location", value: "Badhaiyatal-3, Bardiya, Nepal", href: "#" }
];

const socialLinks = [
  { icon: Github, href: "https://github.com/tiruwaprashis", label: "GitHub", color: "hover:bg-[#333] hover:text-white" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/prashis-tiruwa-9433a0300/", label: "LinkedIn", color: "hover:bg-[#0077B5] hover:text-white" }
];

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            ref={headerRef}
            className={cn(
              "mb-12 opacity-0 transition-all duration-700",
              headerVisible && "opacity-100 animate-fade-in-up"
            )}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm actively seeking opportunities in IT Support, Technology Consulting, or Web
              Development. Feel free to reach out for collaboration or just to say hi!
            </p>
          </div>

          <div
            ref={cardsRef}
            className={cn(
              "grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 opacity-0 transition-all duration-700",
              cardsVisible && "opacity-100"
            )}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">
                        {info.label}
                      </span>
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

          <div
            ref={ctaRef}
            className={cn(
              "opacity-0 transition-all duration-700",
              ctaVisible && "opacity-100 animate-fade-in-up"
            )}
          >
            <div className="flex gap-4 justify-center mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className={cn(
                      "transition-all hover:scale-110 hover:shadow-lg",
                      social.color
                    )}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </Button>
                );
              })}
            </div>

            <Card className="max-w-md mx-auto hover-lift bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Ready to collaborate?</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Send me an email and let's discuss how we can work together
                </p>
                <Button
                  size="lg"
                  asChild
                  className="w-full group transition-all hover:shadow-lg"
                >
                  <a href="mailto:tiruwaprashis4@gmail.com">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Me a Message
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
