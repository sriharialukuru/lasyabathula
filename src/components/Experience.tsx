import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Capgemini",
      period: "Current Role",
      description: "Leading Guidewire Billing Center development with focus on workflows, delinquency handling, and invoicing systems.",
      highlights: [
        "Optimized complex workflows using advanced Gosu queries",
        "Led training initiatives for team skill development", 
        "Drove Agile collaboration and cross-functional communication",
        "Architected scalable solutions for enterprise-level applications"
      ]
    },
    {
      title: "Software Engineer", 
      company: "Capgemini",
      period: "Previous Role",
      description: "Specialized in Policy & Billing Center integrations, API development, and analytics implementation.",
      highlights: [
        "Developed robust Policy & Billing Center integrations",
        "Built and maintained RESTful APIs for seamless data exchange",
        "Implemented CI/CD pipelines using Jenkins for automated deployments",
        "Integrated Inova analytics for enhanced business intelligence"
      ]
    },
    {
      title: "Java Full Stack Developer Intern",
      company: "Capgemini", 
      period: "Internship",
      description: "Gained hands-on experience in full-stack development using Spring Boot and Angular technologies.",
      highlights: [
        "Developed responsive web applications using Spring Boot + Angular",
        "Implemented secure authentication systems with Spring Security",
        "Created intuitive and responsive user interfaces",
        "Conducted comprehensive API testing and validation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3+ years of experience building enterprise solutions and leading development teams
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="fade-in relative timeline-item pl-20">
                  {/* Timeline dot */}
                  <div className="timeline-dot"></div>
                  
                  <Card className="project-card">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <CardTitle className="text-2xl text-primary mb-2">{exp.title}</CardTitle>
                          <div className="flex items-center gap-2 text-accent font-semibold">
                            <Building2 className="h-5 w-5" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                      <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-foreground/90">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;