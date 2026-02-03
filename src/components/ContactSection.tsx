import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mangalisosnothando@gmail.com",
    href: "mailto:mangalisosnothando@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "083 765 9532",
    href: "tel:+27837659532",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent("Message from Portfolio Website");
    const body = encodeURIComponent(`From: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:mangalisosnothando@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setFormData({ email: "", message: "" });
    
    toast({
      title: "Opening email client",
      description: "Your default email app should open with the message ready to send.",
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
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
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm open to internships, graduate opportunities, collaborations, and
              freelance projects
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 lg:p-8"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-secondary/50 border-border resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-foreground">
                Contact Details
              </h3>

              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-soft transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <contact.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {contact.label}
                    </p>
                    <p className="font-medium text-foreground">{contact.value}</p>
                  </div>
                </a>
              ))}

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
