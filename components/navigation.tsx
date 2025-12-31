"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { navigationLinks } from "@/data/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  onNavigate?: (path: string, event: MouseEvent<HTMLAnchorElement>) => void;
  shouldShowEntrance?: boolean;
}

export function Navigation({
  onNavigate,
  shouldShowEntrance = false,
}: NavigationProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      previouslyFocusedElementRef.current =
        document.activeElement as HTMLElement;
      const focusTarget = firstLinkRef.current || closeButtonRef.current;
      focusTarget?.focus();
    } else {
      document.body.style.overflow = "unset";
      previouslyFocusedElementRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements =
        menuPanelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

      if (!focusableElements || focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleMobileNavigate = (
    path: string,
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    setMobileMenuOpen(false);
    onNavigate?.(path, event);
  };

  const handleMenuToggle = () => setMobileMenuOpen((open) => !open);

  const handlePanelKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className="border-b border-border sticky top-0 z-40 bg-background/85 backdrop-blur-sm"
        initial={shouldShowEntrance ? { y: -10, opacity: 0 } : false}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
          delay: 0.1,
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-semibold"
              onClick={(event) => {
                onNavigate?.("/", event);
              }}
            >
              AR
            </Link>

            <div className="flex items-center gap-4">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(event) => {
                      onNavigate?.(link.href, event);
                    }}
                    className={`text-sm font-medium transition-colors hover:text-foreground ${
                      pathname === link.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {mounted ? (
                  theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )
                ) : (
                  <span className="h-5 w-5" aria-hidden />
                )}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={handleMenuToggle}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-haspopup="dialog"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay & Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 md:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              ref={menuPanelRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-75 bg-background border-l border-border md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Primary navigation"
              id="mobile-menu"
              onKeyDown={handlePanelKeyDown}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <Button
                    ref={closeButtonRef}
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Mobile Menu Links */}
                <nav
                  className="flex flex-col gap-2 p-6"
                  aria-label="Mobile primary"
                >
                  {navigationLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        ref={index === 0 ? firstLinkRef : undefined}
                        href={link.href}
                        onClick={(event) => {
                          handleMobileNavigate(link.href, event);
                        }}
                        className={`text-xl font-medium transition-colors hover:text-foreground py-2 block ${
                          pathname === link.href
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
