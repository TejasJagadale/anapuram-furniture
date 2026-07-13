import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const SERVICES = [
  'Wooden Beds',
  'Wardrobes',
  'Dining Tables',
  'TV Units',
  'Kitchen Cabinets',
  'Office Furniture',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark">A</span>
            <span>
              Anapuram
              <small>Wooden Furniture Work</small>
            </span>
          </div>
          <p>
            Custom wooden furniture manufacturer and dealer in Kinassery, Palakkad —
            handcrafting furniture for homes and commercial spaces since 1995.
          </p>
          <div className="footer__socials">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M13.5 21v-8.06h2.7l.4-3.14h-3.1V7.9c0-.9.25-1.52 1.55-1.52h1.66V3.57C15.96 3.5 15 3.42 13.9 3.42c-2.31 0-3.9 1.41-3.9 4V9.8H7.3v3.14h2.7V21h3.5z"/></svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2zm0 5.94a2.34 2.34 0 1 1 0-4.68 2.34 2.34 0 0 1 0 4.68zM16.9 3H7.1A4.1 4.1 0 0 0 3 7.1v9.8A4.1 4.1 0 0 0 7.1 21h9.8a4.1 4.1 0 0 0 4.1-4.1V7.1A4.1 4.1 0 0 0 16.9 3zm2.83 13.9a2.83 2.83 0 0 1-2.83 2.83H7.1a2.83 2.83 0 0 1-2.83-2.83V7.1A2.83 2.83 0 0 1 7.1 4.27h9.8a2.83 2.83 0 0 1 2.83 2.83v9.8zm-.68-10.2a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
            </a>
            <a href="https://wa.me/919400000000" aria-label="WhatsApp" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12.02 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 1.68.44 3.25 1.2 4.62L2.5 21.5l5.03-1.18a9.46 9.46 0 0 0 4.49 1.14h.01c5.25 0 9.5-4.25 9.5-9.5s-4.26-9.46-9.51-9.46zm0 17.3h-.01a7.8 7.8 0 0 1-3.98-1.09l-.29-.17-2.98.7.71-2.9-.19-.3a7.78 7.78 0 0 1-1.19-4.14c0-4.31 3.51-7.82 7.83-7.82 2.09 0 4.05.82 5.53 2.3a7.77 7.77 0 0 1 2.29 5.53c0 4.31-3.51 7.79-7.71 7.79zm4.27-5.84c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.53.12-.16.23-.6.76-.74.91-.14.16-.27.18-.5.06-.23-.12-.98-.36-1.86-1.15-.69-.61-1.15-1.37-1.29-1.6-.14-.23-.02-.36.1-.48.11-.11.23-.27.35-.41.12-.14.16-.23.23-.39.08-.16.04-.29-.02-.41-.06-.12-.53-1.28-.73-1.75-.19-.46-.39-.4-.53-.4-.14 0-.29-.02-.45-.02-.16 0-.41.06-.63.29-.21.23-.83.81-.83 1.98s.85 2.29.97 2.45c.12.16 1.67 2.55 4.05 3.57.57.24 1.01.39 1.36.5.57.18 1.09.15 1.5.09.46-.07 1.38-.56 1.57-1.11.19-.54.19-1 .14-1.11-.06-.11-.21-.17-.44-.29z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {SERVICES.map((service) => (
              <li key={service}><Link to="/services">{service}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__contact">
          <h4>Get In Touch</h4>
          <ul>
            <li>Anapuram Wooden Furniture Work, Kinassery, Palakkad, Kerala</li>
            <li><a href="tel:+919400000000">+91 94000 00000</a></li>
            <li><a href="mailto:info@anapuramfurniture.in">info@anapuramfurniture.in</a></li>
          </ul>
          <div className="footer__map">
            <iframe
              title="Anapuram Wooden Furniture Work Location"
              src="https://www.google.com/maps?q=Kinassery,Palakkad,Kerala&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {year} Anapuram Wooden Furniture Work. All rights reserved.</p>
          <p>Handcrafted in Kinassery, Palakkad, Kerala since 1995</p>
        </div>
      </div>
    </footer>
  );
}
