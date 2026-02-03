import { motion } from "framer-motion";
import { Download, Eye, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-developer.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 lg:pt-0 relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-medium mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              Mangaliso{" "}
              <span className="gradient-text">Snothando</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground mb-4">
              Software Developer (Student)
            </h2>
            
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin size={18} className="text-primary" />
              <span>South Africa</span>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              I am a Diploma in ICT student with an interest in software development 
              and web technologies. I focus on building simple, functional, and 
              user-friendly applications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 shadow-soft">
                <Download size={18} />
                Download CV
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#projects">
                  <Eye size={18} />
                  View My Work
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-pulse" />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elevated border-4 border-background">
                <img
                  src={heroImage}
                  alt="Mangaliso Snothando - Software Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
