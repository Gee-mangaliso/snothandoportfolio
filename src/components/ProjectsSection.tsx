import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Palette, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "UI/UX Design Portfolio",
    description:
      "A collection of user interface designs and prototypes created using Figma, focusing on clean layouts and user-centered design principles.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    icon: Palette,
    category: "Web Design",
  },
  {
    title: "Web Development Projects",
    description:
      "Functional websites and web applications built during academic coursework, utilizing HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: Code,
    category: "Web Development",
  },
  {
    title: "AI-Assisted Web Apps",
    description:
      "Projects developed using AI-assisted tools like Lovable to speed up development workflows and explore modern development practices.",
    tags: ["Lovable", "AI Tools", "React"],
    icon: Sparkles,
    category: "AI-Assisted",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="section-container">
        <div className="max-w-3xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Academic and personal projects showcasing my development journey
            </p>
          </motion.div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group glass-card rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Project Icon */}
                  <div className="h-32 sm:h-auto sm:w-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0">
                    <project.icon className="w-12 h-12 text-primary/50 group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground shrink-0">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="gap-2">
                        <Github size={16} />
                        Code
                      </Button>
                      <Button size="sm" className="gap-2">
                        <ExternalLink size={16} />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <p className="text-muted-foreground mb-4">
              More projects coming soon as I continue my learning journey
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github size={18} />
                View GitHub Profile
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
