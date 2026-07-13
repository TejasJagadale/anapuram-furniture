import React, { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal';

export default function Counter({ end, suffix = '', duration = 1600 }) {
  const [ref, isVisible] = useReveal(0.5);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return undefined;

    let start = null;
    let frameId;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="counter">
      {value}
      {suffix}
    </span>
  );
}
