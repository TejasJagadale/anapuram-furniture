import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

export default function ServiceCard({ image, icon, title, description, delay = 0 }) {
  const [ref, isVisible] = useReveal();

  return (
    <div
      ref={ref}
      className={`service-card reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="service-card__image-wrap">
        <img src={image} alt={title} loading="lazy" />
        <span className="service-card__icon">{icon}</span>
      </div>
      <div className="service-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to="/services" className="service-card__link">
          Learn More →
        </Link>
      </div>
    </div>
  );
}
