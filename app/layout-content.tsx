"use client";

import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { PageTransition } from "@/components/page-transition";
import {
  RouteTransitionProvider,
  StartRouteTransition,
} from "@/components/route-transition-context";
import { useInitialLoad } from "@/hooks/use-initial-load";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [displayedPath, setDisplayedPath] = useState(pathname);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [isVisible, setIsVisible] = useState(true);
  const [waitingForEnter, setWaitingForEnter] = useState(false);
  const pendingPathRef = useRef<string | null>(null);
  const mainRef = useRef<HTMLElement>(null);
  const shouldShowEntrance = useInitialLoad();

  const startTransition = useCallback<StartRouteTransition>(
    (nextPath, event) => {
      if (
        event?.defaultPrevented ||
        event?.button !== 0 ||
        event?.metaKey ||
        event?.ctrlKey ||
        event?.altKey ||
        event?.shiftKey
      ) {
        return false;
      }

      if (
        nextPath === displayedPath ||
        pendingPathRef.current ||
        waitingForEnter ||
        !isVisible
      ) {
        return false;
      }

      event?.preventDefault();
      pendingPathRef.current = nextPath;
      setIsVisible(false);
      return true;
    },
    [displayedPath, waitingForEnter, isVisible]
  );

  useEffect(() => {
    if (
      !pendingPathRef.current &&
      !waitingForEnter &&
      pathname !== displayedPath
    ) {
      setDisplayedPath(pathname);
      setDisplayedChildren(children);
      if (!isVisible) {
        setIsVisible(true);
      }
    }
  }, [children, pathname, displayedPath, waitingForEnter, isVisible]);

  useEffect(() => {
    if (
      waitingForEnter &&
      pathname === displayedPath &&
      pendingPathRef.current === null
    ) {
      setDisplayedChildren(children);
      setWaitingForEnter(false);
      setIsVisible(true);
    }
  }, [children, pathname, displayedPath, waitingForEnter]);

  const handleExitComplete = () => {
    const target = pendingPathRef.current;
    if (target) {
      setDisplayedPath(target);
      router.push(target);
      pendingPathRef.current = null;
      setWaitingForEnter(true);
    } else {
      setIsVisible(true);
    }
  };

  const focusMain = (options?: FocusOptions) => {
    if (!mainRef.current) {
      return;
    }
    try {
      mainRef.current.focus(options);
    } catch {
      mainRef.current.focus();
    }
  };

  useEffect(() => {
    if (!isVisible) {
      return;
    }
    const id = requestAnimationFrame(() => {
      focusMain({ preventScroll: true });
    });
    return () => cancelAnimationFrame(id);
  }, [isVisible, displayedPath]);

  return (
    <RouteTransitionProvider value={startTransition}>
      <motion.div
        initial={shouldShowEntrance ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-50 -translate-y-20 rounded-md bg-background px-4 py-2 font-semibold text-foreground shadow focus-visible:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          onClick={(event) => {
            event.preventDefault();
            focusMain();
          }}
        >
          Skip to main content
        </a>
        <Navigation
          onNavigate={startTransition}
          shouldShowEntrance={shouldShowEntrance}
        />
        <main
          id="main-content"
          ref={mainRef}
          className="relative min-h-screen overflow-hidden"
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={handleExitComplete}
          >
            {isVisible && (
              <PageTransition key={displayedPath}>
                {displayedChildren}
              </PageTransition>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </motion.div>
    </RouteTransitionProvider>
  );
}
