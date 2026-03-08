import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    institution: "Relevant University / College",
    degree: "BSc. Information Technology / Computer Science",
    period: "2018 – 2022",
  },
];

const certifications = [
  { name: "Google Cloud Associate Cloud Engineer (ACE)", issuer: "Google Cloud", year: "2023" },
  { name: "AWS Certified DevOps Engineer", issuer: "Amazon Web Services", year: "2023" },
  { name: "ISO 27001 Lead Implementer", issuer: "PECB / ISO", year: "2023" },
  { name: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF", year: "2023" },
  { name: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp", year: "2022" },
];

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 text-gradient">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="font-mono text-primary text-sm font-semibold mb-6 flex items-center gap-2">
              <GraduationCap size={18} /> Education
            </h3>
            {education.map((edu) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <p className="font-mono text-xs text-primary mb-2">{edu.period}</p>
                <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono text-primary text-sm font-semibold mb-6 flex items-center gap-2">
              <Award size={18} /> Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-lg p-4 hover:border-accent/40 transition-colors flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer} · {cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
