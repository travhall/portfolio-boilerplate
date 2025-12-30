"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { MouseEvent, useEffect, useState } from "react";

interface NavigationProps {
  onNavigate?: (path: string, event: MouseEvent<HTMLAnchorElement>) => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="border-b border-border">
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

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => (
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
          </div>
        </div>
      </div>
    </nav>
  );
}
