import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cloud, Server, Shield, Terminal } from "lucide-react";

const badges = [
  { label: "AWS", color: "from-[hsl(33,100%,50%)] to-[hsl(33,100%,40%)]" },
  { label: "Azure", color: "from-[hsl(210,100%,50%)] to-[hsl(210,80%,40%)]" },
  { label: "GCP", color: "from-[hsl(4,80%,55%)] to-[hsl(45,100%,50%)]" },
  { label: "Terraform", color: "from-[hsl(258,60%,55%)] to-[hsl(258,60%,45%)]" },
  { label: "Kubernetes", color: "from-[hsl(215,80%,55%)] to-[hsl(215,80%,45%)]" },
];

const floatingIcons = [
  { Icon: Cloud, x: "10%", y: "20%", delay: 0 },
  { Icon: Server, x: "85%", y: "30%", delay: 1 },
  { Icon: Shield, x: "75%", y: "70%", delay: 2 },
  { Icon: Terminal, x: "15%", y: "75%", delay: 0.5 },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/10 hidden md:block"
          style={{ left: x, top: y }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay }}
        >
          <Icon size={48} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 text-center relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-widest uppercase">
            // Cloud & DevOps Engineer
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Michael Brian</span>
            <br />
            <span className="text-gradient">Muthee</span>
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-8 font-light">
            Building resilient, scalable cloud infrastructure. Automating everything.
            Securing the pipeline from commit to production.
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {badges.map((badge, i) => (
              <motion.span
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold bg-gradient-to-r ${badge.color} text-foreground`}
              >
                {badge.label}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
