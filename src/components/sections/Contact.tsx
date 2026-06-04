"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/lib/constants";
import { config } from "@/lib/config";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch(config.formspree.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setStatusMessage(
          "Thank you! Your message has been sent successfully."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "Something went wrong. Please try emailing me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const inputBase =
    "h-11 w-full rounded-xl border bg-surface px-4 text-sm text-foreground placeholder:text-fg-muted focus:outline-none focus:ring-1 transition-colors";
  const inputNormal = "border-border focus:border-accent focus:ring-ring";
  const inputError =
    "border-error focus:border-error focus:ring-error/30";

  return (
    <section id="contact" className="bg-surface-alt py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-medium text-foreground">
                Let&apos;s build something amazing.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-secondary">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Whether you have a
                question or just want to say hi, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3 text-sm text-fg-secondary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-fg-secondary">
                  <Mail className="h-4 w-4" />
                </div>
                {PERSONAL_INFO.email}
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-fg-secondary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-fg-secondary">
                  <GithubIcon className="h-4 w-4" />
                </div>
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-fg-secondary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-fg-secondary">
                  <LinkedinIcon className="h-4 w-4" />
                </div>
                LinkedIn
              </a>
              <div className="flex items-center gap-3 text-sm text-fg-secondary">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-fg-secondary">
                  <MapPin className="h-4 w-4" />
                </div>
                {PERSONAL_INFO.location}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4"
            aria-label="Contact form"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium uppercase tracking-wide text-fg-secondary"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-error" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium uppercase tracking-wide text-fg-secondary"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                  placeholder="your@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-xs font-medium uppercase tracking-wide text-fg-secondary"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                className={`${inputBase} ${errors.subject ? inputError : inputNormal}`}
                placeholder="What's this about?"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-xs text-error" role="alert">
                  {errors.subject}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-medium uppercase tracking-wide text-fg-secondary"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={`w-full resize-none rounded-xl border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-fg-muted focus:outline-none focus:ring-1 transition-colors ${
                  errors.message ? inputError : inputNormal
                }`}
                placeholder="Tell me about your project..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-error" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Status messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="flex items-center gap-2 rounded-xl border border-success-border bg-success-bg px-4 py-3 text-sm text-success"
              >
                <CheckCircle className="h-4 w-4 flex-shrink-0" />
                {statusMessage}
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="flex items-center gap-2 rounded-xl border border-error-border bg-error-bg px-4 py-3 text-sm text-error"
              >
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                {statusMessage}
              </motion.div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              icon={
                isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="h-4 w-4 rounded-full border-2 border-accent-fg/30 border-t-accent-fg"
                    aria-hidden="true"
                  />
                ) : (
                  <Send className="h-4 w-4" />
                )
              }
              className="w-full sm:w-auto"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
