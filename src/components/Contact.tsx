import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://michael.brian.dominicatechnologies.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send message");
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 text-gradient">Get in Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, cloud architecture challenges, or opportunities 
              to collaborate on exciting DevOps initiatives.
            </p>
            <div className="space-y-4">
              <a href="mailto:mikkohbrayoh@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <span className="text-sm">mikkohbrayoh@gmail.com</span>
              </a>
              <a href="tel:+254758930908" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <span className="text-sm">+254-758-930-908</span>
              </a>
              <a href="https://linkedin.com/in/micheal-brian-456041215" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Linkedin size={18} className="text-primary" />
                </div>
                <span className="text-sm">LinkedIn Profile</span>
              </a>
              <a href="https://github.com/mikecurious" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Github size={18} className="text-primary" />
                </div>
                <span className="text-sm">GitHub Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              maxLength={100}
              className="bg-card border-border focus:border-primary"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              maxLength={255}
              className="bg-card border-border focus:border-primary"
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              maxLength={1000}
              rows={5}
              className="bg-card border-border focus:border-primary"
            />
            <Button variant="hero" type="submit" className="w-full gap-2">
              <Send size={16} /> Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
