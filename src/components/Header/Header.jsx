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

  const toggleLayer = () => {
    setIsLayerOpen(true);
  }

  const screenSize = useScreenSize();
  const isMobile = screenSize.width <= 768;

  const splineSrc = isMobile 
    ? 'https://prod.spline.design/z8TxyhHvqedYy4lw/scene.splinecode' 
    : 'https://prod.spline.design/liDjqaY-i3BfRC2o/scene.splinecode';

  // const [vh, setVh] = useState(window.innerHeight * 0.01);

  // useEffect(() => {
  //   setVh(window.innerHeight * 0.01);
  // }, []);

  // TODO: check if height is changed on scroll
  // const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setViewportHeight(window.innerHeight);
  //   };

  //   // Set initial height
  //   setViewportHeight(window.innerHeight);

  //   // Update height on window resize
  //   window.addEventListener('resize', handleResize);

  //   // Cleanup listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    // <header className="Header" style={{ height: `${viewportHeight}px` }} >
    // <header className="Header" style={{ height: `calc(${vh}px * 100)`}}>
    <header className="Header" style={{ height: isMobile ? screenSize.height : '100vh'}}>
    {/* <header className="Header"> */}

      <div className="Header__visualContent">
        {/* <Spline scene={splineSrc} width="100%" height={isMobile ? screenSize.height : '100vh'} /> */}
        <Spline scene={splineSrc} />

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
