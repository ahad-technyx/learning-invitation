"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: "div" | "section" | "article" | "ul" | "ol" | "header" | "footer";
  from?: "bottom" | "left" | "right";
  stagger?: boolean;
  className?: string;
};

export function Reveal({
  children,
  as: Tag = "div",
  from = "bottom",
  stagger = false,
  className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reveal = () => {
      requestAnimationFrame(() => node.classList.add("is-visible"));
    };

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      reveal();
      return;
    }

    const rect = node.getBoundingClientRect();
    const alreadyInViewport =
      rect.top < window.innerHeight && rect.bottom > 0;

    if (alreadyInViewport) {
      reveal();
    }

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal();
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(node);
    } else {
      reveal();
    }

    const safetyTimer = window.setTimeout(reveal, 1500);

    return () => {
      observer?.disconnect();
      window.clearTimeout(safetyTimer);
    };
  }, []);

  const fromCls =
    from === "left" ? "from-left" : from === "right" ? "from-right" : "";

  const classes = [
    "reveal-on-scroll",
    fromCls,
    stagger ? "stagger" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const Element = Tag as React.ElementType;

  return (
    <Element
      ref={ref as React.RefObject<HTMLDivElement>}
      className={classes}
    >
      {children}
    </Element>
  );
}
