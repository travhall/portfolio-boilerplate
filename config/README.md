# Page Transitions Configuration

This directory contains the configuration for page transitions using Framer Motion.

## Quick Start

To change the page transition style, edit `transitions.ts` and modify the `pageTransitionConfig` object at the bottom of the file:

```typescript
export const pageTransitionConfig: TransitionConfig = {
  preset: "slideUp", // Change this to any available preset
  duration: 0.4, // Animation duration in seconds
  ease: [0.25, 0.1, 0.25, 1], // Easing function
  delay: 0, // Optional delay before animation starts
};
```

## Available Presets

- **fade**: Simple opacity fade in/out
- **slideUp**: Content slides up from bottom (subtle, professional)
- **slideRight**: Content slides from left to right
- **slideLeft**: Content slides from right to left
- **scale**: Zoom in/out effect
- **blurFade**: Fade combined with blur effect
- **slideUpFade**: Slide up with blur (recommended for portfolios)
- **none**: Disable transitions

## Customization Examples

### Faster transitions

```typescript
{
  preset: "fade",
  duration: 0.2,
  ease: "easeOut",
}
```

### Slower, smoother transitions

```typescript
{
  preset: "slideUpFade",
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
}
```

### No transitions

```typescript
{
  preset: "none",
  duration: 0,
  ease: "linear",
}
```

## Creating Custom Transitions

Add a new preset to the `transitionPresets` object:

```typescript
export const transitionPresets: Record<TransitionPreset, Variants> = {
  // ... existing presets ...

  myCustom: {
    initial: { opacity: 0, x: 100, scale: 0.8 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -100, scale: 0.8 },
  },
};
```

Then update the `TransitionPreset` type to include your new preset:

```typescript
export type TransitionPreset =
  | "fade"
  | "slideUp"
  // ... other presets ...
  | "myCustom"; // Add your preset here
```

## Supported CSS Properties

Framer Motion supports animating most CSS properties including:

- **Layout**: x, y, width, height, scale, rotate
- **Opacity**: opacity
- **Visual**: backgroundColor, color, borderRadius
- **Effects**: filter (blur, brightness, etc.)
- And many more...

## Tips

1. Keep transitions subtle for professional sites (0.3-0.5s duration)
2. Use easing functions for natural motion ([0.25, 0.1, 0.25, 1] is recommended)
3. Test transitions on slower devices to ensure good performance
4. Disable transitions (use "none") if they cause issues

## Files

- `transitions.ts`: Main configuration file
- `../components/page-transition.tsx`: Transition wrapper component
- `../app/layout-content.tsx`: Where transitions are applied

## Troubleshooting

If transitions aren't working:

1. Check that Framer Motion is installed: `npm list framer-motion`
2. Verify the preset name is spelled correctly
3. Ensure the `PageTransition` component is wrapping your content in `layout-content.tsx`
4. Try the "fade" preset to test if the issue is with a specific preset
