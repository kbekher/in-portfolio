import React from 'react';
import Spline from '@splinetool/react-spline';
import { useTranslation } from "react-i18next";


import './Header.scss';
import { Logo } from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import LanguageToggle from '../LanguageToggle/LanguageToggle';

const Header = () => {
  const { t } = useTranslation();
  // const { i18n, t } = useTranslation(); //TODO: need this one to toggle lang

  return (
    <header className="Header˝">
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
