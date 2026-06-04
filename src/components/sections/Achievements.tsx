"use client";

import { motion } from "framer-motion";
import { Trophy, Briefcase, Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ACHIEVEMENTS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  briefcase: Briefcase,
  award: Award,
  graduation: GraduationCap,
};

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

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Achievements"
          subtitle="Milestones and recognitions along my journey."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {ACHIEVEMENTS.map((achievement) => {
            const Icon = iconMap[achievement.icon] || Trophy;
            return (
              <motion.div
                key={achievement.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group flex gap-5 rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {achievement.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
