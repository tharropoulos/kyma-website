"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span key={`char-${index}`} className={cn(`dark:text-white text-black `, word.className)}>
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
          x: 0,
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 1.5,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "w-[7px] md:w-[10px] xl:w-[14px] h-7 md:h-10 lg:h-12 xl:h-16 bg-sky-500/80 ml-[-10px] xl:ml-[-30px]",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
