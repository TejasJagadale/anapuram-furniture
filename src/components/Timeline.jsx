import React from 'react';
import useReveal from '../hooks/useReveal';

export default function Timeline({ steps, vertical = false }) {
  const [ref, isVisible] = useReveal(0.15);

  return (
    <div
      ref={ref}
      className={`timeline ${vertical ? 'timeline--vertical' : ''} reveal ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      {steps.map((step) => (
        <div className="timeline-step" key={step.title}>
          <div className="timeline-step__marker">{step.icon}</div>
          <div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
