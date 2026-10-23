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

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
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
