import React from 'react';
import { useTranslation } from 'react-i18next';

import { Logo } from '../Logo/Logo';
import { ContactForm } from '../ContactForm';
import { ContactLinks } from '../ContactLinks';

import './Footer.scss';


const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='Footer'>
      <div className="container">
        <div className="Footer__content">

          <div className="col">
            <h3 className='Footer__title'>{t("footerPrompt")}</h3>
            <p className='Footer__subtitle'>{t("footerDetails")}</p>

            <Logo />
          </div>

          <div className="col">
            <ContactForm />

            <ContactLinks />
          </div>



        </div>
      </div>
    </div>
  );
}

export default Footer;
