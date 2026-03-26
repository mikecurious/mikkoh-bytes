import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Yet Kenya Ltd",
    role: "Cloud & DevOps Engineer",
    period: "2023 – Present",
    description: [
      "Designed and deployed cloud infrastructure on AWS and GCP for production workloads",
      "Automated CI/CD pipelines using GitHub Actions and Jenkins",
      "Implemented Infrastructure as Code using Terraform across multi-cloud environments",
      "Managed Kubernetes clusters for containerized microservices",
    ],
  },
  {
    company: "AHITI Kabete",
    role: "IT & Systems Administrator",
    period: "2022 – 2023",
    description: [
      "Administered on-premise and cloud-based server infrastructure",
      "Deployed monitoring solutions with Prometheus and Grafana",
      "Managed network security, firewalls, and VPN configurations",
      "Provided technical support and training for staff",
    ],
  },
  {
    company: "Comet Designers",
    role: "Web Developer & IT Support",
    period: "2021 – 2022",
    description: [
      "Developed responsive web applications for clients",
      "Managed hosting infrastructure and domain configurations",
      "Implemented security best practices for web deployments",
      "Collaborated with design teams for UI/UX improvements",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 text-gradient">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-12 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2 md:mt-0 glow-primary z-10" />

                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <Briefcase size={16} />
                      <span className="font-mono text-xs">{exp.period}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-sm text-accent font-mono mb-4">{exp.company}</p>
                    <ul className={`space-y-2 ${i % 2 === 0 ? "md:text-left" : ""}`}>
                      {exp.description.map((item, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1 text-xs shrink-0">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default Experience;
