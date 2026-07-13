import React from 'react';
import Button from './Button';
import useReveal from '../hooks/useReveal';

export default function CTA({
  eyebrow = 'Get Started',
  title = "Let's Build Your Dream Furniture",
  description = 'Share your space and requirements — our craftsmen will design and build furniture made to fit your home perfectly.',
  buttonLabel = 'Contact Us',
  buttonTo = '/contact',
}) {
  const [ref, isVisible] = useReveal();

  return (
    <div className={`container reveal-zoom ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="cta-banner">
        <span className="cta-banner__eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button to={buttonTo} variant="on-dark">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
