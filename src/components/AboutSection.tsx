import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Building functional applications with clean, maintainable code",
  },
  {
    icon: Palette,
    title: "Web Design Background",
    description: "Understanding of layout, usability, and user-centered structure",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Development",
    description: "Leveraging modern AI tools to enhance productivity and workflow",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="section-container">
        <div className="max-w-3xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a software developer student currently studying towards a{" "}
              <strong className="text-foreground">Diploma in ICT at CPUT</strong>. 
              I have a background in web design, which helps me think about layout, 
              usability, and structure before writing code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              I have explored <strong className="text-foreground">AI-web assisted development</strong>, 
              using modern tools to support problem-solving, speed up development, 
              and improve overall workflow. I am eager to continue learning, adapting 
              to new technologies, and applying my skills in academic and practical projects.
            </p>
          </motion.div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:shadow-elevated transition-shadow duration-300 flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
