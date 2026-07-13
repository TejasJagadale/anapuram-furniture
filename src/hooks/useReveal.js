import { useEffect, useRef, useState } from 'react';

/**
 * useReveal
 * Attaches an IntersectionObserver to the returned ref and flips
 * `isVisible` to true the first time the element enters the viewport.
 * Pairs with the .reveal / .reveal-left / .reveal-right / .reveal-zoom
 * utility classes defined in css/index.css.
 */
export default function useReveal(threshold = 0.18) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
