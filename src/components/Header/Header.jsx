import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { useTranslation } from "react-i18next";

import { Logo } from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import Hello from '../Hello/Hello';

import './Header.scss';
import useScreenSize from '../../hooks/useScreenSize';

const Header = () => {
  const { t } = useTranslation();

  const [isLayerOpen, setIsLayerOpen] = useState(false);

  const toggleLayer = () => { setIsLayerOpen(true); }

  const screenSize = useScreenSize();
  const isMobile = screenSize.width <= 768;

  const splineCode = isMobile ? 'z8TxyhHvqedYy4lw' : 'liDjqaY-i3BfRC2o';

  return (
    <header className="Header">
      
      <div className="Header__visualContent">
        <Spline scene={`https://prod.spline.design/${splineCode}/scene.splinecode`} />
      </div>

      <Hello isLayerOpen={isLayerOpen} setIsLayerOpen={setIsLayerOpen} />

      <div className="Header__textContent">
        <div className="container">
          <div className="Header__textContent-inner">

            <div className="Header__top">
              <Logo />
              <h1 className='Header__title'>{t("title")}</h1>
            </div>

            <div className="Header__controls">
              <div className="Header__nav">
                <Navigation />
              </div>

              <div className="Header__actions">
                <button type="button" className="Header__connect-btn" onClick={toggleLayer}>
                  {t("contact")}
                </button>

                <LanguageToggle />
              </div>
            </div>

          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;
