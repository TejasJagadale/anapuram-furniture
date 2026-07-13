import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import useReveal from '../hooks/useReveal';
import { SERVICES, ADDITIONAL_SERVICES } from '../data/content';
import '../css/Services.css';

function ServiceRow({ service, index }) {
  const [ref, isVisible] = useReveal();
  const reversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`service-row ${reversed ? 'service-row--reversed' : ''} reveal ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="service-row__media">
        <img src={service.image} alt={service.title} loading="lazy" />
        <span className="service-row__icon">{service.icon}</span>
      </div>
      <div className="service-row__content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <ul className="service-row__features">
          {service.features.map((feature) => (
            <li key={feature}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19 7" stroke="var(--color-accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero__eyebrow">What We Build</span>
          <h1>Our Services</h1>
          <p>Custom wooden furniture, repair, and finishing services from our Kinassery workshop — built with solid timber and hand-finished detail.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Furniture Manufacturing"
            title="Custom Pieces for Every Room"
            description="Every service below is fully customisable to your wood preference, dimensions, and finish."
          />
          <div className="service-rows">
            {SERVICES.map((service, i) => (
              <ServiceRow service={service} index={i} key={service.key} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f2ece1' }}>
        <div className="container">
          <SectionTitle
            eyebrow="Care & Restoration"
            title="Repair, Polishing & Carving"
            description="Beyond manufacturing, we restore and refinish existing wooden furniture."
          />
          <div className="service-rows">
            {ADDITIONAL_SERVICES.map((service, i) => (
              <ServiceRow service={service} index={i} key={service.key} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <CTA
          eyebrow="Start Your Project"
          title="Tell Us What You Need Built"
          description="Share your room dimensions and style preferences — we'll design and quote your furniture."
        />
      </section>
    </>
  );
}
