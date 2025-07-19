import { Button } from "@/components/ui/button";
import { Download, ArrowDown, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/10 blur-xl"></div>
        <div className="floating-element absolute top-40 right-32 w-24 h-24 rounded-full bg-accent/10 blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="floating-element absolute bottom-32 left-32 w-40 h-40 rounded-full bg-primary/5 blur-xl" style={{ animationDelay: '4s' }}></div>
        <div className="floating-element absolute bottom-20 right-20 w-28 h-28 rounded-full bg-accent/5 blur-xl" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <img 
              src={profilePhoto} 
              alt="Lasya Bathula"
              className="w-40 h-40 rounded-full mx-auto border-4 border-primary/30 shadow-lg object-cover"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Lasya Bathula</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-6 space-y-2">
            <p className="font-medium">Software Developer | Guidewire Specialist | Java Full Stack Developer</p>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable enterprise applications and empowering agile teams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              className="hero-button px-8 py-4 text-lg font-semibold"
              size="lg"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="px-8 py-4 text-lg font-semibold border-primary/30 hover:border-primary transition-colors"
              size="lg"
              asChild
            >
              <a href="/mnt/data/lasya_bathula.pdf" download="Lasya_Bathula_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              className="px-8 py-4 text-lg font-semibold hover:bg-primary/10 transition-colors"
              size="lg"
              asChild
            >
              <a href="https://www.linkedin.com/in/lasya-bathula" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* AWS Certification Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            AWS Certified Cloud Practitioner
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;