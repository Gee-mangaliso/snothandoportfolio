import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const programmingSkills = [
  { name: "HTML", level: 70 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 40 },
  { name: "Java", level: 65 },
  { name: "Python", level: 35 },
];

const tools = [
  { name: "IntelliJ IDEA", category: "IDE" },
  { name: "NetBeans", category: "IDE" },
  { name: "Figma", category: "Design" },
  { name: "MySQL", category: "Database" },
  { name: "Lovable", category: "AI Dev" },
];

const softSkills = [
  "Strong communication",
  "Time management",
  "Adaptability",
  "Eager to learn",
  "Team collaboration",
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/20">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Programming Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Programming & Web Technologies
              </h3>
              <div className="space-y-5">
                {programmingSkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level <= 40
                          ? "Basic"
                          : skill.level <= 60
                          ? "Intermediate"
                          : "Proficient"}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.4 + index * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Platforms */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Tools & Platforms
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="glass-card rounded-xl p-4 text-center hover:shadow-soft transition-shadow"
                  >
                    <p className="font-medium text-foreground">{tool.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {tool.category}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
