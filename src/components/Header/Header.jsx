import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { useTranslation } from "react-i18next";

import './Header.scss';
import { Logo } from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import LanguageToggle from '../LanguageToggle/LanguageToggle';

const Header = () => {
  const { t } = useTranslation();

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    // Set initial height
    setViewportHeight(window.innerHeight);

    // Update height on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="Header"  style={{ height: `${viewportHeight}px`}} >
      <div className="Header__content">

        <div className="Header__visualContent">
          <Spline scene="https://prod.spline.design/liDjqaY-i3BfRC2o/scene.splinecode" />
        </div>

        <div className="Header__textContent">
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
                <button type="button" className="Header__connect-btn">
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
