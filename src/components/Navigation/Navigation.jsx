import React from 'react';
import { useTranslation } from 'react-i18next';
import { NAV_LINKS } from '../../constants';

import './Navigation.scss';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <ul className='Navigation'>
      {NAV_LINKS.map(link => (
        <li className='Navigation__item' key={link}>
          <a href={`#${link}`} className="Navigation__btn">{t(link)}</a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
