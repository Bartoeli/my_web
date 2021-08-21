import Image from 'next/image'
import React from 'react'
import { BannerContainer } from './Banner-styled'
import styles from "./Banner.module.css"



export const Banner = () => {
  return (
    <>
    <BannerContainer>
       <Image
       className={styles.bannerImage}
        alt="Background"
        src="/../public/images/banner.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div className={styles.bannerMenu}>Menu</div>

    </BannerContainer>
    
    </>
  )
}