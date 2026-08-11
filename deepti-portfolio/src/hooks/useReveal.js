import { useEffect, useRef } from "react";

/**
 * Adds an "is-visible" class to the element once it scrolls into view.
 * Pairs with the .reveal CSS class. No-ops gracefully if IntersectionObserver
 * isn't available, and respects prefers-reduced-motion by revealing instantly.
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
