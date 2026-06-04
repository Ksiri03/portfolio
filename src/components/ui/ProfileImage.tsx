"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useState } from "react";
import { PERSONAL_INFO } from "@/lib/constants";

interface ProfileImageProps {
  src?: string;
  alt?: string;
  size?: number;
}

export function ProfileImage({
  src = PERSONAL_INFO.profileImage,
  alt = PERSONAL_INFO.name,
  size = 400,
}: ProfileImageProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
      style={{ width: size, height: size }}
    >
      {/* Decorative ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-8px] rounded-full border border-dashed border-accent/30"
        aria-hidden="true"
      />

      {/* Main image container */}
      <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-border bg-surface shadow-2xl">
        {src && !imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface to-surface-alt">
            <div className="text-center">
              <User className="mx-auto h-20 w-20 text-fg-muted" />
              <p className="mt-2 text-xs text-fg-muted">Add your photo</p>
              <p className="text-[10px] text-fg-muted">
                public/images/profile.jpg
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Accent dot */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 right-4 h-4 w-4 rounded-full border-2 border-background bg-accent"
        aria-hidden="true"
      />
    </motion.div>
  );
}
