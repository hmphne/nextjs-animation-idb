"use client";

import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

const words = ["همراه", "همپای", "همیار"];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 1300);

    return () => clearInterval(intervalId);
  }, []);

  const transitions = useTransition(index, {
    from: { opacity: 0, transform: "translateY(50px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-50px)" },
    config: { mass: 1, tension: 800, friction: 15 },
  });

  return (
    <div
      className="flex items-center justify-center min-h-screen text-white"
      dir="rtl"
    >
      <h1 className="text-4xl font-bold flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span>ایمیگو، </span>
          <span className="relative inline-block w-[110px] min-h-[2.5rem] overflow-y-hidden">
            {transitions((style, i) => (
              <animated.span
                className="absolute right-0 text-right font-black gradient-text"
                style={style}
                data-testid={`animated-word-${words[i]}`}
              >
                {words[i]}
              </animated.span>
            ))}
          </span>{" "}
        </div>
        <span>مهاجرت شما به آلمان</span>
      </h1>
    </div>
  );
}
