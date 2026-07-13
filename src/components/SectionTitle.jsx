import React from 'react';

function JoineryDivider({ center }) {
  return (
    <div className={`joinery-divider ${center ? 'joinery-divider--center' : ''}`}>
      <span className="joinery-divider__line" />
      <svg viewBox="0 0 84 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M0 7 L14 7 L18 1 L26 13 L34 1 L42 13 L50 1 L58 13 L66 1 L70 7 L84 7"
          stroke="var(--color-accent)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="joinery-divider__line" />
    </div>
  );
}

export default function SectionTitle({ eyebrow, title, description, center = false }) {
  return (
    <div className={`section-title ${center ? 'section-title--center' : ''}`}>
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      <JoineryDivider center={center} />
      {description && <p>{description}</p>}
    </div>
  );
}
