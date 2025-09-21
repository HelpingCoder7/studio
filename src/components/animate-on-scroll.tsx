"use client";

import { useRef, useState, useEffect, type ReactNode, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function AnimateOnScroll({ children, className, ...props }: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      data-state={isVisible ? 'open' : 'closed'}
      className={cn(
        'transform-gpu transition-all duration-700 ease-out data-[state=closed]:opacity-0 data-[state=closed]:translate-y-5 data-[state=open]:opacity-100 data-[state=open]:translate-y-0 py-16 md:py-24',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
