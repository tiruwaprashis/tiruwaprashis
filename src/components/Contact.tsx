import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@johndoe.com", label: "Email" }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have a project in mind or just want to chat? I'd love to hear from you!
            </p>
            
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Mail className="w-6 h-6 text-primary" />
                  <a 
                    href="mailto:hello@johndoe.com" 
                    className="text-xl font-medium hover:text-primary transition-colors"
                  >
                    hello@johndoe.com
                  </a>
                </div>
              </CardContent>
            </Card>
            
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
              <a href="mailto:hello@johndoe.com">Send Me a Message</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
