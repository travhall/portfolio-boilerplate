"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  pageTransitionConfig,
  transitionPresets,
} from "@/config/transitions";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const { preset, duration, ease, delay } = pageTransitionConfig;
  const variants = transitionPresets[preset];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{
        duration,
        ease,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
