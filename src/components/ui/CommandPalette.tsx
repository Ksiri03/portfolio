"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Search, Command as CommandIcon } from "lucide-react";
import { COMMANDS, PERSONAL_INFO } from "@/lib/constants";
import { useTheme } from "next-themes";

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { setTheme } = useTheme();

  const filteredCommands = COMMANDS.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const grouped = filteredCommands.reduce(
    (acc, cmd) => {
      if (!acc[cmd.section]) acc[cmd.section] = [];
      acc[cmd.section].push(cmd);
      return acc;
    },
    {} as Record<string, typeof COMMANDS>
  );

  const executeCommand = useCallback(
    (action: string) => {
      setIsOpen(false);
      setQuery("");

      if (action.startsWith("#")) {
        if (action === "#hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        const el = document.querySelector(action);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else if (action === "resume") {
        window.open(PERSONAL_INFO.resumePath, "_blank");
      } else if (action === "theme") {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      } else if (action === "github") {
        window.open(PERSONAL_INFO.github, "_blank");
      } else if (action === "linkedin") {
        window.open(PERSONAL_INFO.linkedin, "_blank");
      }
    },
    [setTheme]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-command-palette]")) {
        setIsOpen(false);
        setQuery("");
      }
    };
    const timer = setTimeout(() => {
      document.addEventListener("click", handleClick);
    }, 100);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  return (
    <>
      {/* Trigger hint */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-10 items-center gap-2 rounded-full border border-border bg-surface/90 px-4 text-xs text-fg-secondary backdrop-blur-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Open command palette (Ctrl+K)"
      >
        <CommandIcon className="h-3 w-3" />
        <span className="hidden sm:inline">Ctrl+K</span>
      </motion.button>

      {/* Command palette modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-start justify-center bg-black/50 pt-[20vh] backdrop-blur-sm"
            onClick={() => {
              setIsOpen(false);
              setQuery("");
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <motion.div
              data-command-palette
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
            >
              {/* Search input */}
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Search className="h-4 w-4 text-fg-secondary" aria-hidden="true" />
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command..."
                  aria-label="Search commands"
                  className="h-12 flex-1 bg-transparent text-sm text-foreground placeholder:text-fg-muted focus:outline-none"
                />
                <kbd className="hidden rounded border border-border bg-background px-1.5 py-0.5 text-[10px] text-fg-secondary sm:inline">
                  ESC
                </kbd>
              </div>

              {/* Commands list */}
              <div className="max-h-72 overflow-y-auto p-2">
                {Object.entries(grouped).length === 0 ? (
                  <p className="p-4 text-center text-sm text-fg-secondary">
                    No commands found.
                  </p>
                ) : (
                  Object.entries(grouped).map(([section, commands]) => (
                    <div key={section} role="group" aria-label={section}>
                      <p className="mb-1 px-3 pt-2 text-[10px] font-medium uppercase tracking-wider text-fg-muted">
                        {section}
                      </p>
                      {commands.map((cmd) => (
                        <button
                          key={cmd.label}
                          onClick={() => executeCommand(cmd.action)}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-fg-secondary transition-colors hover:bg-surface-alt hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <span>{cmd.label}</span>
                          {cmd.shortcut && (
                            <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 text-[10px] text-fg-muted">
                              {cmd.shortcut}
                            </kbd>
                          )}
                        </button>
                      ))}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-border px-4 py-2">
                <span className="text-[10px] text-fg-muted">
                  Navigate with ↑↓ · Select with ↵
                </span>
                <span className="text-[10px] text-fg-muted">
                  {filteredCommands.length} commands
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
