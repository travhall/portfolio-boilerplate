"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect the initial page load.
 * Returns true on first load, false on subsequent navigations.
 * Persists across route transitions using sessionStorage.
 *
 * Starts with true to enable animations by default, then checks
 * sessionStorage in useEffect to disable if already animated.
 */
export function useInitialLoad() {
  const [shouldShowEntrance, setShouldShowEntrance] = useState(true);

  useEffect(() => {
    const hasAnimated = sessionStorage.getItem("entrance-animated");

    if (hasAnimated) {
      // Already animated this session - skip entrance
      setShouldShowEntrance(false);
    } else {
      // First load - show entrance and mark as animated
      setShouldShowEntrance(true);
      sessionStorage.setItem("entrance-animated", "true");
    }
  }, []);

  return shouldShowEntrance;
}
