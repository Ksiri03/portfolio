"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES } from "@/lib/constants";

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

export function Skills() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return SKILL_CATEGORIES;
    const q = searchQuery.toLowerCase();
    return SKILL_CATEGORIES.map((cat) => ({
      ...cat,
      skills: cat.skills.filter((skill) => skill.toLowerCase().includes(q)),
    })).filter((cat) => cat.skills.length > 0);
  }, [searchQuery]);

  return (
    <section id="skills" className="bg-surface-alt py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life."
        />

        {/* Skill search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto mb-12 max-w-md"
        >
          <Search
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-muted"
            aria-hidden="true"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills..."
            aria-label="Search skills"
            className="h-11 w-full rounded-full border border-border bg-surface pl-11 pr-4 text-sm text-foreground placeholder:text-fg-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-fg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Clear search"
            >
              Clear
            </button>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 text-sm font-medium tracking-wide text-foreground uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-fg-secondary transition-colors hover:border-accent/30 hover:text-foreground"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {filteredCategories.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center text-sm text-fg-secondary"
          >
            No skills matching &ldquo;{searchQuery}&rdquo;
          </motion.p>
        )}
      </div>
    </section>
  );
}
