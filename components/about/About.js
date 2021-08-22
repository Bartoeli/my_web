import React from 'react'
import { useTranslation } from 'react-i18next';

import '../../pages/i18n.js';



export const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h3>{t('menu.about')}</h3>
    </div>
  )
}