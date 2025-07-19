import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Hotel, Leaf, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Plant Recognition System",
      description: "AI-powered plant identification system using Convolutional Neural Networks with multilingual support and voice output capabilities.",
      icon: Leaf,
      color: "text-accent",
      bgColor: "bg-accent/10",
      technologies: ["Python", "CNN", "TensorFlow", "gTTS", "Computer Vision", "Machine Learning"],
      features: [
        "Advanced CNN model for accurate plant species identification",
        "Multilingual support for global accessibility", 
        "Voice output using Google Text-to-Speech (gTTS)",
        "Targeted for educators and botanical researchers",
        "Real-time image processing and classification"
      ],
      impact: "Designed for educational institutions and research facilities to enhance botanical studies."
    },
    {
      title: "Hotel Management System",
      description: "Comprehensive full-stack booking platform built with modern web technologies, featuring role-based access control and payment tracking.",
      icon: Hotel,
      color: "text-primary",
      bgColor: "bg-primary/10", 
      technologies: ["Spring Boot", "Angular", "MySQL", "REST APIs", "Spring Security", "Bootstrap"],
      features: [
        "Complete booking management with real-time availability",
        "Role-based access control for different user types",
        "Integrated payment tracking and billing system",
        "Responsive design for optimal user experience",
        "RESTful API architecture for scalable operations"
      ],
      impact: "Streamlined hotel operations and improved customer booking experience."
    },
    {
      title: "Brain Volume Measurement",
      description: "Medical imaging analysis tool for precise brain volume measurement using advanced image processing techniques in MATLAB.",
      icon: Brain,
      color: "text-accent",
      bgColor: "bg-accent/10",
      technologies: ["MATLAB", "Image Processing", "Medical Imaging", "Segmentation", "Algorithm Design"],
      features: [
        "Advanced MRI image processing and analysis",
        "Precise brain tissue segmentation algorithms",
        "Volumetric analysis for medical diagnostics",
        "Support for various medical imaging formats",
        "Accurate measurements for clinical applications"
      ],
      impact: "Assists medical professionals in brain volume analysis for diagnostic purposes."
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions spanning AI, full-stack development, and medical technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="fade-in project-card h-full">
              <CardHeader>
                <div className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <project.icon className={`h-6 w-6 ${project.color}`} />
                </div>
                <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                <p className="text-foreground/80 leading-relaxed">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i}
                        variant="outline" 
                        className="skill-chip text-xs border-primary/30 hover:border-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-accent font-medium italic">{project.impact}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 border-primary/30 hover:border-primary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                    <Github className="h-4 w-4" />
                  </Button>
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