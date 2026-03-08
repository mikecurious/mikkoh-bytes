import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-gradient">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-56 h-56 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center glow-primary overflow-hidden">
              <div className="text-6xl font-mono font-bold text-gradient">MB</div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <p className="text-foreground/90 leading-relaxed mb-6">
              Cloud & DevOps Engineer with hands-on experience designing, deploying, and managing 
              scalable infrastructure across AWS, Azure, and GCP. Passionate about automating CI/CD 
              pipelines, implementing Infrastructure as Code with Terraform, and orchestrating 
              containerized workloads with Kubernetes. I bring a security-first mindset to every 
              architecture I build.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-8">
              From building fintech reporting systems to deploying honeypot security solutions, I 
              thrive on solving complex infrastructure challenges. I hold certifications in GCP, AWS, 
              and ISO 27001, and I'm constantly expanding my cloud expertise.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" /> Nairobi, Kenya
              </span>
              <a href="mailto:mikkohbrayoh@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} className="text-primary" /> mikkohbrayoh@gmail.com
              </a>
              <a href="tel:+254758930908" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} className="text-primary" /> +254-758-930-908
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
