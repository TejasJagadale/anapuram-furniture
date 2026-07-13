import React, { useEffect, useState } from 'react';

function Stars({ count = 5 }) {
  return (
    <div className="testimonial-card__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill={i < count ? 'var(--color-accent)' : 'rgba(200,155,60,0.25)'}
            d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7L2 9.2l7.1-.6z"
          />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ name, location, quote, image }) {
  return (
    <div className="testimonial-card">
      <Stars />
      <p className="testimonial-card__quote">&ldquo;{quote}&rdquo;</p>
      <div className="testimonial-card__person">
        <img src={image} alt={name} loading="lazy" />
        <div>
          <h4>{name}</h4>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialSlider({ testimonials }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(id);
  }, [testimonials.length]);

  return (
    <div className="testimonial-slider">
      <div
        className="testimonial-slider__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {testimonials.map((testimonial) => (
          <div className="testimonial-slider__slide" key={testimonial.name}>
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
      <div className="testimonial-slider__dots">
        {testimonials.map((testimonial, i) => (
          <button
            key={testimonial.name}
            type="button"
            aria-label={`Show testimonial from ${testimonial.name}`}
            className={`testimonial-slider__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialCard;
