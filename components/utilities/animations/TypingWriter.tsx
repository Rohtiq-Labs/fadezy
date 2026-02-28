"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { motion, steps } from "framer-motion";

interface Props {
  text: string | string[];
  onAnimationEnd?: () => void;
  typingSpeed?: number;
  beforeNextLineDelay?: number;
  startingDelay?: number;
  infinite?: boolean;
  defaultText?: string;
}

const delay = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

const TypingWriter: FC<Props> = ({
  text: textProps,
  onAnimationEnd,
  typingSpeed = 220,
  beforeNextLineDelay = 800,
  startingDelay = 0,
  infinite = true,
  defaultText = "",
}) => {
  const [display, setDisplay] = useState("");
  const cancelledRef = useRef(false);

  useEffect(() => {
    const lines = Array.isArray(textProps)
      ? textProps.filter((line): line is string => typeof line === "string")
      : [typeof textProps === "string" ? textProps : ""];

    if (lines.length === 0) {
      setDisplay(typeof defaultText === "string" ? defaultText : "");
      return;
    }

    const firstLine = lines[0] ?? (typeof defaultText === "string" ? defaultText : "");
    setDisplay(firstLine);
    cancelledRef.current = false;

    const run = async () => {
      await delay(startingDelay);
      let index = 0;

      while (true) {
        if (cancelledRef.current) return;

        const toDelete = lines[index] ?? "";
        for (let i = 0; i < toDelete.length; i++) {
          if (cancelledRef.current) return;
          setDisplay((prev) => prev.slice(0, -1));
          await delay(typingSpeed);
        }

        await delay(beforeNextLineDelay);
        if (cancelledRef.current) return;

        index = (index + 1) % lines.length;
        const toType = lines[index] ?? "";

        for (let i = 0; i < toType.length; i++) {
          if (cancelledRef.current) return;
          setDisplay((prev) => prev + toType[i]);
          await delay(typingSpeed);
        }

        await delay(beforeNextLineDelay);
        if (!infinite && index === lines.length - 1) {
          onAnimationEnd?.();
          return;
        }
      }
    };

    run();
    return () => {
      cancelledRef.current = true;
    };
  }, [
    Array.isArray(textProps) ? textProps.join("\n") : textProps,
    typingSpeed,
    beforeNextLineDelay,
    startingDelay,
    infinite,
    defaultText,
    onAnimationEnd,
  ]);

  return (
    <motion.div
      className="inline-block"
      style={{ borderRightStyle: "solid", borderRightWidth: "3px" }}
      initial={{ borderRightColor: "rgba(255, 255, 255, 0.75)" }}
      animate={{ borderRightColor: "rgba(255, 255, 255, 0)" }}
      transition={{ ease: steps(40), duration: 0.75, repeat: Infinity }}
    >
      {display}
    </motion.div>
  );
};

export default TypingWriter;
