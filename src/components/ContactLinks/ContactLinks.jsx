import React from 'react';
import { MEDIA_LINKS } from '../../constants/constants';

import './ContactLinks.scss';

export const ContactLinks = () => {
  return (
    <div className="ContactLinks">
      <div className="ContactLinks__content">
        {MEDIA_LINKS.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            title={`Ivan's ${name}`}
            className={`ContactLinks__link ContactLinks__link--${name}`}
          >
            <i className={`fa-brands fa-${name}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}