import React, { useContext } from 'react'
import LanguageToggle from '../LanguageToggle/LanguageToggle'
import Navigation from '../Navigation/Navigation'
import { useTranslation } from 'react-i18next';
import { LayerContext } from '../../LayerContext';

import './Controls.scss';

const Controls = () => {
  const { t } = useTranslation();
  const { setIsLayerOpen } = useContext(LayerContext);

  return (
    <div className='Controls'>
      <Navigation />

      <div className="Controls__actions">
        <button type="button" className="Controls__connect-btn" onClick={() => { setIsLayerOpen(true) }}>
          {t("contact")}
        </button>

        <LanguageToggle />
      </div>
    </div>
  )
}

export default Controls
