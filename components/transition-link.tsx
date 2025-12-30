"use client";

import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, MouseEvent } from "react";
import { useRouteTransition } from "@/components/route-transition-context";

type TransitionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<LinkProps, "href"> & {
    href: string;
  };

export function TransitionLink({
  href,
  onClick,
  children,
  ...rest
}: TransitionLinkProps) {
  const startTransition = useRouteTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) {
      return;
    }

    if (startTransition?.(href, event)) {
      return;
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
