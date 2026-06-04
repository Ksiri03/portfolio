"use client";

import { useState, useEffect, useCallback } from "react";

export function useTypingEffect(
  strings: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000
) {
  const [text, setText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentString = strings[stringIndex];

    if (!isDeleting) {
      setText(currentString.substring(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex + 1 === currentString.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return pauseTime;
      }
      return typingSpeed;
    } else {
      setText(currentString.substring(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);

      if (charIndex - 1 === 0) {
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
        return typingSpeed;
      }
      return deletingSpeed;
    }
  }, [strings, stringIndex, charIndex, isDeleting, typingSpeed, deletingSpeed, pauseTime]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      tick();
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return text;
}
