import { Variants, Transition } from "framer-motion";

/**
 * Page Transition Configuration
 *
 * How to customize transitions:
 * 1. Change the 'preset' in pageTransitionConfig to any of the available presets
 * 2. Adjust 'duration' (in seconds) to make transitions faster or slower
 * 3. Modify 'ease' for different animation curves:
 *    - [0.25, 0.1, 0.25, 1] (easeInOut - smooth start and end)
 *    - "easeIn", "easeOut", "easeInOut", "linear"
 *    - Custom cubic bezier: [x1, y1, x2, y2]
 * 4. Add 'delay' (optional) to pause before animation starts
 *
 * Available presets:
 * - "fade": Simple opacity fade
 * - "slideUp": Slide from bottom with fade
 * - "slideRight": Slide from left to right
 * - "slideLeft": Slide from right to left
 * - "scale": Zoom in/out effect
 * - "blurFade": Fade with blur effect
 * - "slideUpFade": Slide up with blur (recommended)
 * - "none": No transition
 *
 * To create custom transitions:
 * 1. Add a new preset to the transitionPresets object
 * 2. Define initial, animate, and exit states
 * 3. Use any CSS property that Framer Motion supports
 */

export type TransitionPreset =
  | "fade"
  | "slideUp"
  | "slideRight"
  | "slideLeft"
  | "scale"
  | "blurFade"
  | "slideUpFade"
  | "none";

export interface TransitionConfig {
  preset: TransitionPreset;
  duration: number;
  ease: Transition["ease"];
  delay?: number;
}

export const transitionPresets: Record<TransitionPreset, Variants> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },

  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },

  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },

  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },

  blurFade: {
    initial: { opacity: 0, filter: "blur(4px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(4px)" },
  },

  slideUpFade: {
    initial: { opacity: 0, y: 30, filter: "blur(2px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -10, filter: "blur(2px)" },
  },

  none: {
    initial: {},
    animate: {},
    exit: {},
  },
};

export const pageTransitionConfig: TransitionConfig = {
  preset: "slideUp",
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1],
  delay: 0,
};
