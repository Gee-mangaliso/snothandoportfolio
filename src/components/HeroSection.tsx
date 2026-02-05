import { motion } from "framer-motion";
import { ChevronDown, Download, Eye, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dark-hooded.jpg";

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight">
              <span className="gradient-text">Mangaliso Snothando</span>
            </h1>

            {/* Title */}
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Software Developer (Student)
            </p>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span>South Africa</span>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              A passionate software developer with an interest in web technologies 
              and mobile applications. I focus on building simple, functional, 
              and user-friendly applications.
            </p>

            {/* Availability */}
            <p className="text-primary font-medium">
              Open to internships, graduate opportunities, collaborations, and freelance projects
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="/cv.pdf" download="Mangaliso_Snothando_CV.pdf">
                  <Download size={18} />
                  Download CV
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToProjects}
                className="gap-2"
              >
                <Eye size={18} />
                View My Work
              </Button>
            </div>

            {/* Scroll Indicator - Aligned below buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="pt-6 flex justify-center"
            >
              <button
                onClick={scrollToAbout}
                className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="text-sm">Scroll</span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronDown
                    size={20}
                    className="group-hover:text-primary transition-colors"
                  />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
