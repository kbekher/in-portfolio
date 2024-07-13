import React from 'react';
import { useTranslation } from 'react-i18next';

import './Navigation.scss';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <ul className='Navigation'>
      <li className='Navigation__item'>
        <a href="#about" className="Navigation__btn">{t("about")}</a>
      </li>

      <li className='Navigation__item'>
        <a href="#portfolio" className="Navigation__btn">{t("portfolio")}</a>
      </li>

      <li className='Navigation__item'>
        <a href="#connect" className="Navigation__btn">{t("connect")}</a>
      </li>
    </ul>
  );
}

export default Navigation;
