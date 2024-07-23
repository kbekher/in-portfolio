import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContactLinks } from '../ContactLinks';

import './HeroSection.scss';

const HeroSection = ({ type }) => {
  const { t } = useTranslation();

  return (
    <div className="HeroSection">
      <div className="HeroSection__img-wrapper">
        <img 
          src={`https://inozemtsev-portfolio.s3.eu-central-1.amazonaws.com/${type}.png`} 
          alt="Ivan Inozemtsev"
          className="HeroSection__img"
        />
      </div>
      <div className="container">
        <div className="HeroSection__content">

          <h2 className="HeroSection__title">
            {type === 'hero' ? (
              <>
                {t(`${type}TitlePart1`)} <span>Design</span> {t(`${type}TitlePart2`)} <span>Illustration</span>
              </>
            ) : t(`${type}Title`)
            }
          </h2>

          {type === 'hero' ? (
            <>
              <p className="HeroSection__text">{t(`${type}Text`)}</p>

              <ContactLinks />
            </>
          ) : (
            [1, 2, 3].map(index => (
              <p className="HeroSection__text" key={index}>
                {t(`${type}Text${index}`)}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
