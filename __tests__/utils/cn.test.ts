import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("cn utility function", () => {
  it("merges class names correctly", () => {
    const result = cn("text-base", "text-lg");
    expect(result).toBe("text-lg");
  });

  it("handles conditional classes", () => {
    const isActive = true;
    const result = cn("base-class", isActive && "active-class");
    expect(result).toContain("base-class");
    expect(result).toContain("active-class");
  });

  it("removes falsy values", () => {
    const result = cn("text-base", false && "hidden", null, undefined, "p-4");
    expect(result).toBe("text-base p-4");
  });
});
