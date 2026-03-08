import { motion } from "framer-motion";
import { ExternalLink, Github, Server, Shield, Globe, BarChart3, CreditCard, Activity } from "lucide-react";

const projects = [
  {
    title: "Roven Capital",
    description: "Cloud infrastructure for a fintech investment platform. Designed scalable architecture on AWS with auto-scaling, load balancing, and secure payment integrations.",
    tags: ["AWS", "Terraform", "Docker", "CI/CD"],
    Icon: CreditCard,
  },
  {
    title: "CBK PSP Reporting System",
    description: "Built an automated reporting pipeline for Central Bank of Kenya PSP compliance. Integrated data pipelines and secure dashboards.",
    tags: ["GCP", "Python", "PostgreSQL", "Grafana"],
    Icon: BarChart3,
  },
  {
    title: "System Monitoring Dashboard",
    description: "Comprehensive monitoring solution using Prometheus and Grafana for real-time infrastructure visibility across multi-cloud environments.",
    tags: ["Prometheus", "Grafana", "Kubernetes", "AlertManager"],
    Icon: Activity,
  },
  {
    title: "Genio Pago",
    description: "Payment gateway infrastructure with high availability and PCI DSS compliance. Deployed on Azure with Kubernetes orchestration.",
    tags: ["Azure", "Kubernetes", "Helm", "Vault"],
    Icon: CreditCard,
  },
  {
    title: "Honeypot Security System",
    description: "Deployed decoy infrastructure to detect and analyze intrusion attempts. Built automated threat intelligence collection and alerting pipelines.",
    tags: ["Security", "Docker", "ELK Stack", "Python"],
    Icon: Shield,
  },
  {
    title: "Yet Kenya Website",
    description: "Full-stack web platform with cloud-native deployment. Implemented CI/CD pipelines, containerized architecture, and CDN distribution.",
    tags: ["AWS", "Docker", "GitHub Actions", "CloudFront"],
    Icon: Globe,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 text-gradient">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all group hover:glow-primary"
            >
              <div className="flex items-center justify-between mb-4">
                <project.Icon size={28} className="text-primary group-hover:text-accent transition-colors" />
                <div className="flex gap-2">
                  <Github size={16} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                  <ExternalLink size={16} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-mono">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-secondary text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
