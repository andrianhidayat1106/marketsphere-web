import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind classes safely.
 * Combines `clsx` for conditional classes and `tailwind-merge` to resolve conflicts.
 * This is an industry standard approach for React + Tailwind UI components.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
