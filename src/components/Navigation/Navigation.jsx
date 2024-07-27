import React from 'react';
import { useTranslation } from 'react-i18next';
import { NAV_LINKS } from '../../constants/constants';
import { Link } from 'react-scroll';

import './Navigation.scss';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <ul className='Navigation'>
      {NAV_LINKS.map(link => (
        <li className='Navigation__item' key={link}>
          <Link
            className="Navigation__btn"
            to={link}
            smooth={true}
            delay={0}
            duration={300}
          >
            {t(link)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
