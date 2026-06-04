"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CERTIFICATIONS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Certifications() {
  return (
    <section id="certifications" className="bg-surface-alt py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications validating my expertise and knowledge."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-base font-medium text-foreground">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-accent">{cert.issuer}</p>
              <p className="mt-1 text-xs text-fg-muted">{cert.date}</p>
              <p className="mt-3 text-sm leading-relaxed text-fg-secondary">
                {cert.description}
              </p>
              {cert.verifyUrl && (
                <motion.a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Verify
                  <ExternalLink className="h-3 w-3" />
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
