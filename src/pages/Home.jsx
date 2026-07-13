import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import GalleryCard from '../components/GalleryCard';
import Timeline from '../components/Timeline';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Button from '../components/Button';
import { TestimonialSlider } from '../components/TestimonialCard';
import useReveal from '../hooks/useReveal';
import { SERVICES, GALLERY_ITEMS, TESTIMONIALS, PROCESS_STEPS, ICONS } from '../data/content';
import '../css/Home.css';

const FEATURES = [
  { icon: ICONS.experience, title: '30+ Years Experience', description: 'Three decades of trusted craftsmanship in Palakkad, Kerala.' },
  { icon: ICONS.wood, title: 'Premium Wood', description: 'Sourced teak, rosewood, and seasoned timber for lasting quality.' },
  { icon: ICONS.design, title: 'Custom Designs', description: 'Every piece designed around your space and requirements.' },
  { icon: ICONS.delivery, title: 'On-Time Delivery', description: 'Careful planning ensures your furniture arrives when promised.' },
];

function FeatureCard({ icon, title, description, delay }) {
  const [ref, isVisible] = useReveal();
  return (
    <div ref={ref} className={`feature-card reveal ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="feature-card__icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function AboutPreview() {
  const [imgRef, imgVisible] = useReveal();
  const [textRef, textVisible] = useReveal();

  return (
    <section className="section about-preview">
      <div className="container about-preview__grid">
        <div ref={imgRef} className={`about-preview__media reveal-left ${imgVisible ? 'is-visible' : ''}`}>
          <img
            src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=900&q=80"
            alt="Craftsman finishing a wooden furniture piece at Anapuram workshop"
            loading="lazy"
          />
          <div className="about-preview__badge">
            <strong>30+</strong>
            <span>Years of Craftsmanship</span>
          </div>
        </div>
        <div ref={textRef} className={`about-preview__content reveal-right ${textVisible ? 'is-visible' : ''}`}>
          <SectionTitle
            eyebrow="Our Story"
            title="Handcrafted Furniture Rooted in Kerala Tradition"
          />
          <p>
            Since 1995, Anapuram Wooden Furniture Work has been building custom furniture from
            our workshop in Kinassery, Palakkad. What began as a small family carpentry unit has
            grown into a trusted name for homes and businesses across Kerala, known for solid
            timber, precise joinery, and finishes built to last generations.
          </p>
          <p>
            Every piece we make is measured, cut, and finished by hand — no shortcuts, no
            particle board, just genuine wood craftsmanship.
          </p>
          <Button to="/about" variant="outline">Read More</Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Why Anapuram"
            title="Why Choose Us"
            description="Three decades of dependable, handcrafted furniture built for Kerala homes."
            center
          />
          <div className="feature-grid">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <AboutPreview />

      <section className="section" style={{ backgroundColor: '#f2ece1' }}>
        <div className="container">
          <SectionTitle
            eyebrow="What We Build"
            title="Our Services"
            description="Custom wooden furniture crafted for every room, built to your exact measurements."
            center
          />
          <div className="services-grid">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.key}
                image={service.image}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={(i % 4) * 90}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Our Work"
            title="Featured Projects"
            description="A look at recent furniture built and installed for our customers."
            center
          />
          <div className="gallery-grid">
            {GALLERY_ITEMS.map((item, i) => (
              <GalleryCard key={item.title} {...item} delay={(i % 3) * 100} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionTitle
            eyebrow="How We Work"
            title="Our Process"
            description="From first conversation to final installation, in four clear stages."
            center
          />
          <Timeline steps={PROCESS_STEPS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Customer Stories"
            title="What Our Customers Say"
            center
          />
          <TestimonialSlider testimonials={TESTIMONIALS} />
        </div>
      </section>

      <section className="section section--dark stats-section">
        <div className="container">
          <Stats />
        </div>
      </section>

      <section className="section">
        <CTA />
      </section>
    </>
  );
}
