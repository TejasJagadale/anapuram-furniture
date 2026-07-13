import React, { useState } from 'react';

const INITIAL_STATE = { name: '', phone: '', email: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name';
    if (!form.phone.trim()) nextErrors.phone = 'Please enter your phone number';
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address';
    }
    if (!form.message.trim()) nextErrors.message = 'Please add a short message';
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(INITIAL_STATE);
    }
  };

  if (submitted) {
    return (
      <div className="contact-form__success">
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" stroke="var(--color-accent)" strokeWidth="1.5" />
          <path d="M7 12.5l3 3 7-7" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3>Thank you for reaching out</h3>
        <p>Our team will get back to you within one business day.</p>
        <button type="button" className="btn btn--outline" onClick={() => setSubmitted(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your full name" />
          {errors.name && <span className="contact-form__error">{errors.name}</span>}
        </div>
        <div className="contact-form__field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" />
          {errors.phone && <span className="contact-form__error">{errors.phone}</span>}
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
        {errors.email && <span className="contact-form__error">{errors.email}</span>}
      </div>

      <div className="contact-form__field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="What are you looking for?" />
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Tell us about the furniture you need, room size, and preferred wood." />
        {errors.message && <span className="contact-form__error">{errors.message}</span>}
      </div>

      <button type="submit" className="btn">Send Message</button>
    </form>
  );
}
