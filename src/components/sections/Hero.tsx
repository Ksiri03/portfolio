"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { PERSONAL_INFO, TYPING_STRINGS } from "@/lib/constants";

export function Hero() {
  const typedText = useTypingEffect(TYPING_STRINGS, 80, 40, 2000);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-24 lg:grid-cols-2 lg:pt-0">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4 text-sm font-medium tracking-widest text-accent uppercase"
          >
            Welcome
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl font-light tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-lg text-fg-secondary sm:text-xl"
          >
            {PERSONAL_INFO.title}
          </motion.p>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 flex items-center justify-center gap-2 lg:justify-start"
          >
            <span className="text-sm text-fg-secondary">I&apos;m a</span>
            <span className="font-mono text-lg font-medium text-accent">
              {typedText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block h-5 w-[2px] bg-accent"
              aria-hidden="true"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-6 max-w-lg text-sm leading-relaxed text-fg-secondary mx-auto lg:mx-0"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToProjects}
              icon={<ExternalLink className="h-4 w-4" />}
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={PERSONAL_INFO.resumePath}
              icon={<Download className="h-4 w-4" />}
              target="_blank"
            >
              Download Resume
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={scrollToContact}
              icon={<Mail className="h-4 w-4" />}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <ProfileImage size={360} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-fg-muted">Scroll</span>
          <ArrowDown className="h-4 w-4 text-fg-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
