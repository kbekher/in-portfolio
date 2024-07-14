import React from 'react'
import { useTranslation } from 'react-i18next';
import 'animate.css';

import './Hello.scss';

const Hello = ({ isLayerOpen, setIsLayerOpen }) => {
  const { t } = useTranslation();

  const closeLayer = () => {
    setIsLayerOpen(false);
  }

  if (!isLayerOpen) {
    return null;
  }

  return (
    <div className={`Hello animate__animated ${isLayerOpen ? "animate__fadeIn" : ""}`}>
      <div className="Hello__content">
        <button type="button" className="Hello__closeBtn" onClick={closeLayer}>
          <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.3369 20.5576L40.299 38.7377" stroke="#FFFFFE" strokeLinecap="round" />
            <path d="M21.2305 39.6254L39.4106 19.6633" stroke="#FFFFFE" strokeLinecap="round" />
            <rect x="0.5" y="0.5" width="60" height="60" rx="30" stroke="#FFFFFE" />
          </svg>
        </button>

        <div className="Hello__textContent">
          <p className="Hello__text">{t("hello")}</p>
          <a href="mailto:inozemtsevco@gmail.com" className="Hello__email">inozemtsevco@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Hello
