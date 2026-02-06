import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School, BookOpen } from "lucide-react";

const educationData = [
  {
    icon: School,
    title: "National Senior Certificate (Matric)",
    institution: "Zwelakhe Secondary School",
    period: "Completed: 2023",
    modules: [],
    current: false,
  },
  {
    icon: GraduationCap,
    title: "Diploma in Applications Development",
    institution: "Cape Peninsula University of Technology (CPUT)",
    period: "In Progress",
    modules: [
      "Applications Development Foundations",
      "Applications Development Practise",
      "Web Frameworks",
      "Projects",
      "Information Systems",
      "Multimedia (UX/UI)",
    ],
    current: true,
  },
  {
    icon: BookOpen,
    title: "Self-Learning",
    institution: "Continuous Development",
    period: "Ongoing",
    modules: [],
    current: false,
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            My academic journey and continuous learning in technology
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                <div className="md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 hidden md:flex items-center justify-center w-16 h-16">
                    <div
                      className={`w-4 h-4 rounded-full border-4 ${
                        edu.current
                          ? "bg-primary border-primary/30"
                          : "bg-muted border-border"
                      }`}
                    />
                  </div>

                  <div
                    className={`glass-card rounded-2xl p-6 ${
                      edu.current ? "border-primary/30" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          edu.current
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <edu.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-foreground">
                            {edu.title}
                          </h3>
                          {edu.current && (
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          {edu.period}
                        </p>

                        {edu.modules.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {edu.modules.map((module) => (
                              <span
                                key={module}
                                className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                              >
                                {module}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
