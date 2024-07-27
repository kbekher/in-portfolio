import React from 'react';
import Spline from '@splinetool/react-spline';
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from 'react-scroll';

import useIsMobile from '../../hooks/useIsMobile';

import { Logo } from '../Logo/Logo';
import Controls from '../Controls/Controls';

import './Header.scss';

const Header = () => {
  const { t } = useTranslation();

  const isMobile = useIsMobile();

  const splineCode = isMobile ? 'z8TxyhHvqedYy4lw' : 'liDjqaY-i3BfRC2o';

  const handleHeaderClick = () => {
    if (window.scrollY === 0 || !isMobile) return;

    scroll.scrollToTop({ duration: '250ms' });
  }

  const handleLogoClick = () => {
    if (window.scrollY === 0 || isMobile) return;

    scroll.scrollToTop({ duration: '250ms' });
  }

  return (
    <header className="Header" onClick={handleHeaderClick}>

      <div className="Header__visualContent">
        <Spline scene={`https://prod.spline.design/${splineCode}/scene.splinecode`} />
      </div>

      <div className="Header__textContent">

        <div className="Header__top">
          <div className="Header__logo" onClick={handleLogoClick}>
            <Logo />
          </div>
          <h1 className='Header__title'>{t("title")}</h1>
        </div>

        <div className="Header__controls">
          <Controls />
        </div>
      </div>

    </header>
  );
}

export default Header;
