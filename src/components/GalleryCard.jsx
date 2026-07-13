import React from 'react';
import useReveal from '../hooks/useReveal';

export default function GalleryCard({ image, title, category, delay = 0 }) {
  const [ref, isVisible] = useReveal();

  return (
    <div
      ref={ref}
      className={`gallery-card reveal-zoom ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img src={image} alt={title} loading="lazy" />
      <div className="gallery-card__overlay">
        <span className="gallery-card__category">{category}</span>
        <h4>{title}</h4>
      </div>
    </div>
  );
}
