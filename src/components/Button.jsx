import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button.
 * - Pass `to` for an internal route (renders a react-router Link).
 * - Pass `href` for an external/anchor link.
 * - Otherwise renders a <button> and calls onClick.
 * variant: 'primary' | 'outline' | 'on-dark'
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}) {
  const variantClass =
    variant === 'outline' ? 'btn--outline' : variant === 'on-dark' ? 'btn--on-dark' : '';
  const classes = `btn ${variantClass} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
