import React from 'react';
import ContactForm from '../components/ContactForm';
import useReveal from '../hooks/useReveal';
import '../css/Contact.css';

const INFO_ITEMS = [
  {
    label: 'Address',
    value: 'Anapuram Wooden Furniture Work, Kinassery, Palakkad, Kerala',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    label: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 7:00 PM',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 94000 00000',
    href: 'tel:+919400000000',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 1-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@anapuramfurniture.in',
    href: 'mailto:info@anapuramfurniture.in',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formRef, formVisible] = useReveal();
  const [infoRef, infoVisible] = useReveal();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero__eyebrow">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>Visit our Kinassery workshop, call us, or send a message — we're happy to discuss your furniture requirements.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div ref={formRef} className={`contact-grid__form reveal-left ${formVisible ? 'is-visible' : ''}`}>
            <h2>Send Us a Message</h2>
            <p className="contact-grid__form-lead">Tell us about your project and we'll get back within one business day.</p>
            <ContactForm />
          </div>

          <div ref={infoRef} className={`contact-grid__info reveal-right ${infoVisible ? 'is-visible' : ''}`}>
            <div className="contact-info-card">
              <h2>Business Information</h2>
              <ul className="contact-info-list">
                {INFO_ITEMS.map((item) => (
                  <li key={item.label}>
                    <span className="contact-info-list__icon">{item.icon}</span>
                    <div>
                      <strong>{item.label}</strong>
                      {item.href ? <a href={item.href}>{item.value}</a> : <span>{item.value}</span>}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="contact-info-card__actions">
                <a href="tel:+919400000000" className="btn">Call Now</a>
                <a href="https://wa.me/919400000000" className="btn btn--outline" target="_blank" rel="noreferrer">WhatsApp Us</a>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                title="Anapuram Wooden Furniture Work Map"
                src="https://www.google.com/maps?q=Kinassery,Palakkad,Kerala&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
