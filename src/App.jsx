import React, { useContext, useEffect, useState } from 'react';
import { Element, Events } from 'react-scroll';
// import _ from 'lodash';

import { LayerContext } from './LayerContext';
import useIsMobile from './hooks/useIsMobile';

// import { SECTIONS } from './constants/constants';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Hero/HeroSection';
import Hello from './components/Hello/Hello';
import Controls from './components/Controls/Controls';

import './App.scss';


function App() {
  const { isLayerOpen } = useContext(LayerContext);

  const isMobile = useIsMobile();

  // const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false); // State for managing the 'has-scrolled' class

  // const scrollToSection = (index) => {
  //   setIsScrolling(true);
  //   scroller.scrollTo(SECTIONS[index], {
  //     duration: 400,
  //     delay: 0,
  //     smooth: 'linear',
  //   });
  // };

  // TODO: hide or disable scrolling and then scroll to the next section
  // Scroll to the next section
  const handleScroll = () => {
      // if (isScrolling) {
      //   return;
      // }

      const currentScrollY = window.scrollY;
      // const sectionOffsets = SECTIONS.map((section) => document.getElementById(section).offsetTop);
      // const currentOffset = sectionOffsets[currentSectionIndex];

      // if (currentScrollY > currentOffset + 10) {
      //   // Scrolling down
      //   if (currentSectionIndex < SECTIONS.length - 1) {
      //     setCurrentSectionIndex((prevIndex) => {
      //       const nextIndex = prevIndex + 1;
      //       scrollToSection(nextIndex);
      //       return nextIndex;
      //     });
      //   }
      // } else if (currentScrollY < currentOffset - 10) {
      //   // Scrolling up
      //   if (currentSectionIndex > 0) {
      //     setCurrentSectionIndex((prevIndex) => {
      //       const nextIndex = prevIndex - 1;
      //       scrollToSection(nextIndex);
      //       return nextIndex;
      //     });
      //   }
      // }

      if (currentScrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }
    // }, 100);

  // TODO: Fix scrolling - doeasn;t work well when scrolling in different directions
  // Scroll to the nearest section 
  // const handleScroll = _.debounce(() => {
  //   if (isScrolling) return;

  //   const currentScrollY = window.scrollY;
  //   const sectionOffsets = SECTIONS.map((section) => {
  //     const element = document.getElementById(section);
  //     return element ? element.offsetTop : 0;
  //   });

  //   const nearestSectionIndex = sectionOffsets.reduce((prevIndex, currentOffset, index) => {
  //     return Math.abs(currentOffset - currentScrollY) < Math.abs(sectionOffsets[prevIndex] - currentScrollY)
  //       ? index
  //       : prevIndex;
  //   }, currentSectionIndex);

  //   console.log('nearestSectionIndex', nearestSectionIndex);
  //   console.log('currentSectionIndex', currentSectionIndex);

  //   if (nearestSectionIndex !== currentSectionIndex) {
  //     setCurrentSectionIndex(nearestSectionIndex);
  //     scrollToSection(nearestSectionIndex);
  //   } else {
  //     setCurrentSectionIndex(nearestSectionIndex);
  //   }
  // }, 100);


  useEffect(() => {
    Events.scrollEvent.register('end', () => {
      setIsScrolling(false);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('end');
    };
    // eslint-disable-next-line 
  }, [isScrolling]);

  useEffect(() => {
    isLayerOpen
      ? document.body.classList.add('body--with-menu')
      : document.body.classList.remove('body--with-menu');
  }, [isLayerOpen]);

  return (
    <div className={`App ${hasScrolled ? 'has-scroll' : ''}`}>
      {isLayerOpen && <Hello />}

      {isMobile && <Controls /> }

      <Element name="header" id="header">
        <Header />
      </Element>

      <main>
        <Element name="hero" id="hero">
          <HeroSection type="hero" />
        </Element>

        {/* <Element name="aceandtate" id="aceandtate">
      </Element>

      <Element name="xtrafit" id="xtrafit">
      </Element>

      <Element name="flowtech" id="flowtech">
      </Element>

      <Element name="illustration" id="illustration">
      </Element> */}
        {/* 
        <Project 
          title=""
          description=""
          type=""
          mediaSrc=""
          behanceUrl=""
          siteUrl=""
        /> */}

        <Element name="bio" id="bio">
          <HeroSection type="biography" />
        </Element>

        {/* <video height="800" controls autoplay loop>
        <source src="https://inozemtsev-portfolio.s3.eu-central-1.amazonaws.com/xtrafit.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      </main>



      <Element name="footer" id="footer">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
