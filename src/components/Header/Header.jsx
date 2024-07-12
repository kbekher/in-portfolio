import React from 'react';
import Spline from '@splinetool/react-spline';

import './Header.scss';
import { Logo } from '../Logo/Logo';

const Header = () => {
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

              {/* <Navbar />  */}
            </div>


            <h1 className='Header__title'>
              Creating Visual Solutions that Inspire the World
            </h1>

            {/* <LanguageSwitch /> */}

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
