import React from 'react';

/**
 * Header component showing title, subtitle and avatar area.
 * PUBLIC_INTERFACE
 */
export default function Header({ title = 'Foodgo', subtitle = 'Order your favourite food!', avatarSrc = '' }) {
  return (
    <div>
      <div className="abs text-1-50" role="heading" aria-level="1">{title}</div>
      <div className="abs text-1-51">{subtitle}</div>
      <div className="abs group-1-52" aria-label="User avatar">
        <div className="abs rect-1-53"></div>
        {avatarSrc ? <img className="abs img-1-54" src={avatarSrc} alt="User avatar" /> : null}
      </div>
    </div>
  );
}
