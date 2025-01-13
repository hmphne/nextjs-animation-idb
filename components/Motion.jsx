"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const AnimatedWords = () => {
  const words = ["ایمیگو", "همپا", "همراه"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % words.length;
        if (nextIndex === 0) {
          setIsReversed(true);
        }
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    initial: {
      opacity: 1,
      y: isReversed ? -50 : 50, // اینکه از چه ارتفاعی جابجایی شروع بشه
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    },
    exit: {
      opacity: 0,
      y: isReversed ? 50 : -50,
      transition: {
        duration: 0.6,

        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
  };

  const bounceVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.1, // Start bounce after word appears
        times: [2, 0.01, 0.5], // Control timing of the bounce sequence
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center h-96 overflow-hidden relative">
      <div className="h-48 relative">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={containerVariants}
            className="absolute left-1/2 -translate-x-1/2"
          >
            <motion.span
              className="text-4xl font-bold block"
              variants={bounceVariants}
              initial="initial"
              animate="animate"
            >
              {words[currentIndex]}
            </motion.span>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* <div className="mt-4 text-sm text-gray-500">
        Word {currentIndex + 1} of {words.length}
      </div> */}
    </div>
  );
};

export default AnimatedWords;
