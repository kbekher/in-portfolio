import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContactLinks } from '../ContactLinks';

import './HeroSection.scss';
import useIsMobile from '../../hooks/useIsMobile';

const HeroSection = ({ type }) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <div className="HeroSection">
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

          <div className="HeroSection__img-container">
            <img
              src={`https://inozemtsev-portfolio.s3.eu-central-1.amazonaws.com/${type}.png`}
              alt="Ivan Inozemtsev"
              height={isMobile ? 424 : 900}
              className="HeroSection__image"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;
