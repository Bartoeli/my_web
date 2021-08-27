import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next';

import '../../pages/i18n.js';
import { AboutContainer } from './About-styled.js';
import styles from './About.module.css'
import { PartHeader } from '../partHeader/PartHeader.js';



export const About = () => {
  

  return (
    <AboutContainer>
      <PartHeader headerText="about me" imageAlt="about icon" imageSrc="/../public/images/about.png" headerImageFill="#000"/>
    </AboutContainer>
  )
}