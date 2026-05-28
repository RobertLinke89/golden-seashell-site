import { type ReactNode, useEffect, useRef, useState } from "react";

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
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`parallax-bg relative ${className}`}
      style={{
        backgroundImage: isVisible
          ? `${overlay}, url(${image})`
          : `${overlay}, url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)`,
        minHeight,
      }}
    >
      {isVisible && (
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
          style={{ objectFit: "cover", zIndex: -1 }}
        />
      )}
      {children}
    </section>
  );
}
