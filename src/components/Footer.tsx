import { Mail, Phone, Linkedin, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Lasya Bathula</h3>
            <p className="text-foreground/80 mb-4">
              Software Developer specializing in Guidewire and Java Full Stack Development. 
              Passionate about building scalable enterprise applications.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm font-medium">AWS Certified Cloud Practitioner</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "#about", label: "About Me" },
                { href: "#experience", label: "Experience" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const elementId = link.href.substring(1);
                    const element = document.getElementById(elementId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:bathula.lasya@gmail.com" 
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  bathula.lasya@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a 
                  href="tel:937-321-8131" 
                  className="text-sm text-foreground/80 hover:text-accent transition-colors"
                >
                  937-321-8131
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground/80">Dayton, OH, 45324</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-accent" />
                <a 
                  href="https://www.linkedin.com/in/lasya-bathula" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 hover:text-accent transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-foreground/60 mb-4 md:mb-0">
              © {currentYear} Lasya Bathula. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;