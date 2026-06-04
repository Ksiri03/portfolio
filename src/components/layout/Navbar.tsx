"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS, PERSONAL_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-lg font-medium tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Go to top"
          >
            {PERSONAL_INFO.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex" role="menubar">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                role="menuitem"
                aria-current={activeSection === item.href ? "true" : undefined}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  activeSection === item.href
                    ? "text-foreground font-medium"
                    : "text-fg-secondary hover:bg-surface hover:text-foreground"
                )}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-x-1 -bottom-px h-px bg-accent"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => handleNavClick("#contact")}
            >
              Contact
            </Button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-surface-alt md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={
          isMobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed left-0 right-0 top-16 z-40 border-b border-border bg-background/95 backdrop-blur-xl md:hidden",
          isMobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        role="menu"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-1 p-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              role="menuitem"
              aria-current={activeSection === item.href ? "true" : undefined}
              className={cn(
                "rounded-lg px-4 py-3 text-left text-sm transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                activeSection === item.href
                  ? "text-foreground font-medium bg-surface/50"
                  : "text-fg-secondary hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="primary"
            size="sm"
            className="mt-2"
            onClick={() => handleNavClick("#contact")}
          >
            Contact Me
          </Button>
        </div>
      </motion.div>
    </>
  );
}
