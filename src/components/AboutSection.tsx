import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Sparkles, Smartphone } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Software & Mobile Development",
    description: "Building functional web and mobile applications using Java, Python, and modern technologies",
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "Creating clean, user-centered layouts with attention to usability",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Development",
    description: "Leveraging modern AI tools to enhance productivity and workflows",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8 text-center"
          >
            I am a software developer student currently studying towards a{" "}
            <span className="text-foreground font-medium">
              Diploma in ICT at CPUT
            </span>
            . I have a background in web design, which helps me think about
            layout, usability, and structure before writing code.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-12 text-center"
          >
            I have explored{" "}
            <span className="text-foreground font-medium">
              AI-web assisted development
            </span>
            , using modern tools to support problem-solving, speed up
            development, and improve overall workflow. I am eager to continue
            learning, adapting to new technologies, and applying my skills in
            academic and practical projects.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group glass-card rounded-xl p-6 hover:shadow-elevated transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
