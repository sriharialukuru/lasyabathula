import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Wrench, Cloud, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "text-primary",
      skills: ["Java", "GOSU", "JavaScript", "TypeScript", "HTML5", "CSS3"]
    },
    {
      title: "Frameworks & Tools", 
      icon: Wrench,
      color: "text-accent",
      skills: ["Spring Boot", "Spring Security", "Angular", "Bootstrap", "Git", "Maven", "Postman", "IntelliJ", "Jenkins", "VS Code", "Swagger"]
    },
    {
      title: "Guidewire Platform",
      icon: Cloud,
      color: "text-primary",
      skills: ["Billing Center", "Policy Center", "PCF", "Plugins", "Web Services", "Workflow Configuration"]
    },
    {
      title: "Cloud & Databases",
      icon: Database, 
      color: "text-accent",
      skills: ["AWS", "MySQL", "PostgreSQL", "Hibernate", "Database Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise across modern technologies and enterprise platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="fade-in project-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i}
                      variant="secondary" 
                      className="skill-chip px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-primary/20 hover:text-primary cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="fade-in mt-12 text-center">
          <Card className="glass border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Core Competencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-accent mb-2">Development Practices</h4>
                  <p className="text-foreground/80">Agile, TDD, Code Reviews, Version Control</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Architecture</h4>
                  <p className="text-foreground/80">Microservices, RESTful APIs, System Design</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Leadership</h4>
                  <p className="text-foreground/80">Team Training, Mentoring, Project Coordination</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;