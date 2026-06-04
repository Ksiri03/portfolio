"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STATS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building intelligent systems that make a difference."
        />

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-base leading-relaxed text-fg-secondary">
              I&apos;m a B.Tech Computer Science student specializing in
              Artificial Intelligence and Machine Learning at{" "}
              <span className="font-medium text-foreground">
                VJIT (Vidya Jyothi Institute of Technology)
              </span>
              . My journey in technology began with a deep curiosity about how
              machines can learn and make intelligent decisions.
            </p>
            <p className="text-base leading-relaxed text-fg-secondary">
              Currently serving as an{" "}
              <span className="font-medium text-foreground">
                AI Developer Intern at Viswam.ai
              </span>
              , where I work on developing machine learning models, building
              data preprocessing pipelines, and conducting feature engineering
              for production systems. I thrive on turning complex data into
              actionable insights.
            </p>
            <p className="text-base leading-relaxed text-fg-secondary">
              Beyond work, I&apos;m an active participant in national-level
              hackathons and a continuous learner with certifications spanning
              Salesforce, Python, and AI development. I believe in the power of
              open source and collaborative engineering.
            </p>
            <p className="text-base leading-relaxed text-fg-secondary">
              My interests span{" "}
              <span className="font-medium text-foreground">
                Artificial Intelligence, Machine Learning, Cloud Computing, and
                Open Source
              </span>{" "}
              development — always exploring the intersection of these fields to
              build scalable, impactful solutions.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
              >
                <p className="text-3xl font-light tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-fg-secondary">
                  {stat.suffix ? `${stat.suffix} ` : ""}
                  {stat.label}
                </p>
                <div
                  className="mt-3 h-px w-8 bg-accent transition-all group-hover:w-12"
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
