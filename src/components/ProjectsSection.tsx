import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Palette, Code, Sparkles, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import thriftshopScreenshot from "@/assets/thriftshop-screenshot.png";
import academicScreenshot from "@/assets/academic-figma-screenshot.png";
import portfolioScreenshot from "@/assets/portfolio-screenshot.png";

const projects = [
  {
    title: "Academic Projects",
    description:
      "A collection of user interface designs and prototypes created using Figma, focusing on clean layouts and user-centered design principles.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    icon: Palette,
    category: "Design",
    figmaLink: "https://www.figma.com/proto/bS8y77RG0WXpEJKsyOMx80/T4-MAF?node-id=311-14398&t=nW4xJZ2FOEUVFLxx-1",
    figmaLabel: "View on Figma",
    githubLink: null,
    liveLink: null,
    image: academicScreenshot,
  },
  {
    title: "Thriftshop E-Commerce Website",
    description:
      "A full-stack web application designed for browsing and purchasing thrift items. Users can also become sellers, listing and managing their own products. Focus on simplicity, functionality, and user-friendly experience.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
    icon: Code,
    category: "Development",
    figmaLink: null,
    githubLink: "https://github.com/Gee-mangaliso/Thriftshop-e-commerce-website-edited-",
    liveLink: "http://127.0.0.1:5000",
    image: thriftshopScreenshot,
  },
  {
    title: "My Developer Portfolio",
    description:
      "Built using Lovable AI tools to present my projects, CV, and developer identity. This portfolio highlights both traditional coding projects and AI-supported workflows, reflecting my ability to integrate modern development practices with transparency and clarity.",
    tags: ["Lovable", "AI Tools", "React", "TypeScript"],
    icon: Sparkles,
    category: "AI-Assisted",
    figmaLink: null,
    figmaLabel: null,
    githubLink: null,
    liveLink: "https://lovable.dev/@gee-mangaliso/portfolio",
    image: portfolioScreenshot,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Academic and personal projects showcasing my development journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300"
            >
              {/* Project Preview Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <project.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
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
                <div className="flex flex-wrap gap-2">
                {project.figmaLink && (
                    <Button size="sm" className="gap-2" asChild>
                      <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        {project.figmaLabel || "View on Figma"}
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button size="sm" variant="outline" className="gap-2" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button size="sm" variant="secondary" className="gap-2" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <Globe size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
