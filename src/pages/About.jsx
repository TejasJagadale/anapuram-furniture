import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';
import CTA from '../components/CTA';
import useReveal from '../hooks/useReveal';
import { ICONS } from '../data/content';
import '../css/About.css';

const JOURNEY_STEPS = [
  { icon: '1995', title: 'The Workshop Begins', description: 'Founded as a small family carpentry unit in Kinassery, Palakkad, building furniture for local homes.' },
  { icon: '2004', title: 'Growing Reputation', description: 'Word-of-mouth trust grew our client base across Palakkad district and neighbouring towns.' },
  { icon: '2015', title: 'Custom Manufacturing', description: 'Expanded into full custom furniture manufacturing for homes and commercial spaces across Kerala.' },
  { icon: '2026', title: '30+ Years of Craft', description: 'Three decades on, still hand-building every piece with the same commitment to quality.' },
];

const VALUES = [
  { icon: ICONS.wood, title: 'Craftsmanship', description: 'Every joint, cut, and finish is done by trained hands, not shortcuts.' },
  { icon: ICONS.experience, title: 'Quality', description: 'We use seasoned, solid timber built to withstand daily use for decades.' },
  { icon: ICONS.design, title: 'Integrity', description: 'Honest timelines, transparent pricing, and furniture that matches what was promised.' },
  { icon: ICONS.delivery, title: 'Customer Satisfaction', description: 'We measure success by how long our furniture lasts in your home.' },
];

const WORKSHOP_IMAGES = [
  'https://images.unsplash.com/photo-1541558869434-2840d308329a?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1622428051717-dcd8412959de?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=700&q=80',
];

function ValueCard({ icon, title, description, delay }) {
  const [ref, isVisible] = useReveal();
  return (
    <div ref={ref} className={`feature-card reveal ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="feature-card__icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function WorkshopGallery() {
  const [ref, isVisible] = useReveal();
  return (
    <div ref={ref} className={`workshop-gallery reveal ${isVisible ? 'is-visible' : ''}`}>
      {WORKSHOP_IMAGES.map((src, i) => (
        <div className="workshop-gallery__item" key={src}>
          <img src={src} alt={`Anapuram workshop scene ${i + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export default function About() {
  const [storyRef, storyVisible] = useReveal();
  const [imgRef, imgVisible] = useReveal();

  return (
    <>
      <section className="about-hero">
        <img
          src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=1920&q=80"
          alt="Wooden furniture workshop interior with timber stacks"
          loading="eager"
        />
        <div className="about-hero__overlay" />
        <div className="container about-hero__content">
          <span className="hero__eyebrow">About Anapuram</span>
          <h1>Our Journey in Wood, Since 1995</h1>
          <p>Three decades of handcrafted furniture, built with patience, precision, and pride from our workshop in Kinassery, Palakkad.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-story__grid">
          <div ref={imgRef} className={`about-story__media reveal-left ${imgVisible ? 'is-visible' : ''}`}>
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80"
              alt="Founder-era carpentry workshop"
              loading="lazy"
            />
          </div>
          <div ref={storyRef} className={`about-story__content reveal-right ${storyVisible ? 'is-visible' : ''}`}>
            <SectionTitle eyebrow="Our Story" title="Built on Craft, Grown on Trust" />
            <p>
              Anapuram Wooden Furniture Work started in 1995 as a small carpentry workshop in
              Kinassery, Palakkad, founded on a simple belief: furniture should be built to last
              generations, not seasons. What began with a handful of local commissions has grown
              into a full custom furniture manufacturing and dealership serving homes and
              businesses across Kerala.
            </p>
            <div className="about-story__mv">
              <div>
                <h4>Our Mission</h4>
                <p>To craft durable, beautifully finished wooden furniture that fits every home and budget, without compromising on quality.</p>
              </div>
              <div>
                <h4>Our Vision</h4>
                <p>To remain Palakkad's most trusted name in custom wooden furniture, known for craftsmanship passed down through generations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f2ece1' }}>
        <div className="container">
          <SectionTitle eyebrow="Since 1995" title="Our Journey" center />
          <Timeline steps={JOURNEY_STEPS.map((s) => ({ ...s, icon: <span className="timeline-year">{s.icon}</span> }))} vertical />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Inside The Workshop" title="Workshop Gallery" center />
          <WorkshopGallery />
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionTitle eyebrow="Why Customers Trust Us" title="Our Values" center />
          <div className="feature-grid">
            {VALUES.map((value, i) => (
              <ValueCard key={value.title} {...value} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <CTA
          eyebrow="Work With Us"
          title="Ready to Build Something That Lasts?"
          description="Visit our Kinassery workshop or get in touch to start your custom furniture project."
        />
      </section>
    </>
  );
}
