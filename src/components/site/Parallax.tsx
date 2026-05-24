import { type ReactNode } from "react";

interface ParallaxSectionProps {
  image: string;
  overlay?: string;
  children: ReactNode;
  minHeight?: string;
  className?: string;
}

export function ParallaxSection({
  image,
  overlay = "linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.55))",
  children,
  minHeight = "60vh",
  className = "",
}: ParallaxSectionProps) {
  return (
    <section
      className={`parallax-bg relative ${className}`}
      style={{
        backgroundImage: `${overlay}, url(${image})`,
        minHeight,
      }}
    >
      {children}
    </section>
  );
}
