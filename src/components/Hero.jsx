import React from 'react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__media">
        <img
          src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=1920&q=80"
          alt="Artisan shaping a wooden furniture frame in a Kerala workshop"
          loading="eager"
        />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <span className="hero__eyebrow">Anapuram Wooden Furniture Work · Est. 1995</span>
        <h1>
          Crafting Timeless Wooden Furniture <span className="text-accent">Since 1995</span>
        </h1>
        <p>
          Handcrafted furniture designed with precision, durability, and elegance for every
          home — built in Kinassery, Palakkad, and delivered across Kerala.
        </p>
        <div className="btn-row">
          <Button to="/services">Explore Services</Button>
          <Button to="/contact" variant="on-dark">Contact Us</Button>
        </div>
      </div>

      <div className="hero__scroll-cue" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
