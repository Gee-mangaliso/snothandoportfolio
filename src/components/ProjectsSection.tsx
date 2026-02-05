import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Palette, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Academic Projects",
    description:
      "A collection of user interface designs and prototypes created using Figma, focusing on clean layouts and user-centered design principles.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    icon: Palette,
    category: "Design",
    figmaLink: "https://www.figma.com/design/bS8y77RG0WXpEJKsyOMx80/T4-MAF?node-id=0-1&m=dev&t=yJq52UhSiKo0LIuj-1",
    image: "/placeholder.svg",
  },
  {
    title: "Developed Projects",
    description:
      "Functional websites, web applications, and mobile apps built during academic coursework, utilizing HTML, CSS, JavaScript, and Android development.",
    tags: ["HTML", "CSS", "JavaScript", "Java", "Android"],
    icon: Code,
    category: "Development",
    figmaLink: null,
    image: "/placeholder.svg",
  },
  {
    title: "Web Applications (AI-Assisted)",
    description:
      "Projects developed using AI-assisted tools like Lovable to speed up development workflows and explore modern development practices.",
    tags: ["Lovable", "AI Tools"],
    icon: Sparkles,
    category: "AI-Assisted",
    figmaLink: null,
    image: "/placeholder.svg",
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
                <div className="flex gap-3">
                  {project.figmaLink && (
                    <Button size="sm" className="gap-2" asChild>
                      <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        View on Figma
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
