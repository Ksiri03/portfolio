"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Trophy, MapPin, Calendar, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HACKATHONS, type Hackathon } from "@/lib/constants";

export function Hackathons() {
  const [selected, setSelected] = useState<Hackathon | null>(null);

  return (
    <section id="hackathons" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Hackathons"
          subtitle="Competing and building at national-level hackathons across India."
        />

        {/* Horizontal timeline */}
        <div className="relative overflow-x-auto pb-8" role="list" aria-label="Hackathon timeline">
          <div className="flex min-w-max gap-8 px-8">
            {HACKATHONS.map((hackathon, index) => (
              <motion.div
                key={hackathon.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="w-80 flex-shrink-0"
                role="listitem"
              >
                {/* Timeline connector */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-border" aria-hidden="true" />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-background"
                  >
                    <Trophy className="h-4 w-4 text-accent" />
                  </motion.div>
                  <div className="h-px flex-1 bg-border" aria-hidden="true" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  onClick={() => setSelected(hackathon)}
                  className="cursor-pointer rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${hackathon.title} details`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(hackathon);
                    }
                  }}
                >
                  <div className="mb-3 flex items-center gap-2 text-xs text-fg-secondary">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {hackathon.date}
                    <MapPin className="ml-2 h-3 w-3" aria-hidden="true" />
                    {hackathon.location}
                  </div>
                  <h3 className="text-lg font-medium text-foreground">
                    {hackathon.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-fg-secondary">
                    {hackathon.description}
                  </p>
                  {hackathon.result && (
                    <span className="mt-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {hackathon.result}
                    </span>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} details`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-surface p-8"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-fg-secondary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground">
                    {selected.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-fg-secondary">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {selected.date}
                    <MapPin className="ml-1 h-3 w-3" aria-hidden="true" />
                    {selected.location}
                  </div>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-fg-secondary">
                {selected.description}
              </p>

              <ul className="mt-4 space-y-2">
                {selected.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-fg-secondary"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {h}
                  </li>
                ))}
              </ul>

              {selected.result && (
                <div className="mt-6 rounded-xl bg-accent/5 p-4 text-center">
                  <span className="text-sm font-medium text-accent">
                    Result: {selected.result}
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
