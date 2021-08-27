import React from 'react'
import { HeaderImage, ImageContainer } from './PartHeader-styled'


export const PartHeader = ({headerText, imageAlt, imageSrc, headerImageFill}) => {
  return (
  <>
    <h3>{headerText}</h3>
    <ImageContainer>
      <HeaderImage 
      headerImageFill={headerImageFill}
        alt={imageAlt}
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
    </ImageContainer>
  </>
  )
}


