"use client";

import {
  createContext,
  MouseEvent as ReactMouseEvent,
  ReactNode,
  useContext,
} from "react";

export type StartRouteTransition = (
  path: string,
  event?: ReactMouseEvent<HTMLAnchorElement>
) => boolean;

const RouteTransitionContext = createContext<StartRouteTransition | null>(null);

export function RouteTransitionProvider({
  value,
  children,
}: {
  value: StartRouteTransition | null;
  children: ReactNode;
}) {
  return (
    <RouteTransitionContext.Provider value={value}>
      {children}
    </RouteTransitionContext.Provider>
  );
}

export function useRouteTransition() {
  return useContext(RouteTransitionContext);
}
