"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const words = ["همراه", "همپای", "همیار"];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 1300);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen text-white"
      dir="rtl"
    >
      <h1 className="text-4xl font-bold flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span>ایمیگو، </span>
          <span className="relative inline-block w-[110px] min-h-[2.5rem] overflow-y-hidden">
            <AnimatePresence initial={false}>
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                  type: "spring",
                  mass: 1,
                  damping: 15,
                  stiffness: 800,
                }}
                className="absolute right-0 text-right font-black gradient-text"
                data-testid={`animated-word-${words[index]}`}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
        </div>
        <span>مهاجرت شما به آلمان</span>
      </h1>
    </div>
  );
}
