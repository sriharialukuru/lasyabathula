import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Bio */}
          <div className="fade-in mb-12">
            <Card className="glass border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  With 3 years of experience as a Software Developer, I specialize in building scalable enterprise applications 
                  using <span className="text-primary font-semibold">Guidewire Billing Center</span>, 
                  <span className="text-primary font-semibold"> Java Full Stack Development</span>, and modern web technologies. 
                  My expertise spans across the complete software development lifecycle, from requirement analysis to deployment.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90">
                  I thrive in <span className="text-accent font-semibold">Agile environments</span>, leading collaborative development 
                  initiatives and mentoring team members. My experience includes optimizing complex workflows, building RESTful APIs, 
                  and architecting scalable solutions that enhance user experience and business efficiency.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education & Certification */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="fade-in">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-primary" />
                Education
              </h3>
              
              <div className="space-y-6">
                {/* Masters */}
                <Card className="project-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-semibold text-primary">Masters in Computer Science</h4>
                      <span className="text-sm text-muted-foreground">2023 - 2025</span>
                    </div>
                    <p className="text-foreground/80 font-medium">Wright State University</p>
                    <p className="text-muted-foreground">Dayton, OH</p>
                  </CardContent>
                </Card>

                {/* Bachelors */}
                <Card className="project-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-semibold text-primary">Bachelors in Electronics and Communications</h4>
                      <span className="text-sm text-muted-foreground">2017 - 2021</span>
                    </div>
                    <p className="text-foreground/80 font-medium">Veltech R&D Institute of Science and Technology</p>
                    <p className="text-muted-foreground">Chennai, India</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Certification */}
            <div className="fade-in">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="h-8 w-8 text-accent" />
                Certification
              </h3>
              
              <Card className="project-card h-fit">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-accent">AWS Certified Cloud Practitioner</h4>
                      <p className="text-muted-foreground">Amazon Web Services</p>
                    </div>
                  </div>
                  <p className="text-foreground/80">
                    Demonstrates foundational understanding of AWS cloud services, security, and best practices for cloud architecture.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;