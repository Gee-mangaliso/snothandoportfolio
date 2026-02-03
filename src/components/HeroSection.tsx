import { motion } from "framer-motion";
import { Download, Eye, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dark-hooded.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 lg:pt-0 relative overflow-hidden"
    >
      {/* Full background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="max-w-2xl">
          {/* Text Content - Left aligned */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
