"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERIENCES } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in AI and software development."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2"
            aria-hidden="true"
          />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-8 top-6 -translate-x-1/2 md:left-1/2">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-background"
                >
                  <Briefcase className="h-4 w-4 text-accent" />
                </motion.div>
              </div>

              {/* Content card */}
              <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)] md:even:ml-auto">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-accent">{exp.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-fg-secondary">
                    {exp.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-fg-secondary"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
