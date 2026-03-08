import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: ["AWS (EC2, S3, Lambda, RDS, CloudFormation)", "Azure (VMs, AKS, DevOps)", "GCP (GCE, GKE, Cloud Functions)"],
  },
  {
    title: "IaC & Automation",
    skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi", "Bash/Shell Scripting"],
  },
  {
    title: "Containers & Orchestration",
    skills: ["Docker", "Kubernetes", "Helm", "Docker Compose", "Container Security"],
  },
  {
    title: "CI/CD & DevOps",
    skills: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "Azure DevOps"],
  },
  {
    title: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch", "Datadog"],
  },
  {
    title: "Security & Networking",
    skills: ["IAM & RBAC", "VPN & VPC Design", "SSL/TLS", "Firewalls", "ISO 27001"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 text-gradient">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-12 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors group"
            >
              <h3 className="font-mono text-sm font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
                {`> ${cat.title}`}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1 text-xs">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
