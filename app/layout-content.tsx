"use client";

import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { PageTransition } from "@/components/page-transition";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [displayedPath, setDisplayedPath] = useState(pathname);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [isVisible, setIsVisible] = useState(true);
  const [waitingForEnter, setWaitingForEnter] = useState(false);
  const pendingPathRef = useRef<string | null>(null);

  const handleNavigate = useCallback(
    (nextPath: string, event?: MouseEvent<HTMLAnchorElement>) => {
      if (
        event?.defaultPrevented ||
        event?.button !== 0 ||
        event?.metaKey ||
        event?.ctrlKey ||
        event?.altKey ||
        event?.shiftKey
      ) {
        return;
      }

      if (
        nextPath === displayedPath ||
        pendingPathRef.current ||
        waitingForEnter ||
        !isVisible
      ) {
        return;
      }

      event?.preventDefault();
      pendingPathRef.current = nextPath;
      setIsVisible(false);
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

  return (
    <>
      <Navigation onNavigate={handleNavigate} />
      <main className="relative min-h-screen overflow-hidden">
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
    </>
  );
}
