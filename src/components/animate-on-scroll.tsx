"use client";

import { useRef, useState, useEffect, type ReactNode, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animation?: 'fade-in-up' | 'slide-in-right';
}

export function AnimateOnScroll({ children, className, animation = 'fade-in-up', ...props }: AnimateOnScrollProps) {
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
        'transform-gpu transition-all duration-700 ease-in-out',
        'data-[state=closed]:opacity-0',
        animation === 'fade-in-up' && 'data-[state=closed]:translate-y-5',
        animation === 'slide-in-right' && 'data-[state=closed]:translate-x-10',
        'data-[state=open]:opacity-100 data-[state=open]:translate-x-0 data-[state=open]:translate-y-0',
        'py-16 md:py-24',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
