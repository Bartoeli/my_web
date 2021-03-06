import Image from "next/image";
import React from "react";
import { Button } from "../button/Button";
import { TopMenu } from "../navBar/topMenu/TopMenu";
import { BannerContainer } from "./Banner-styled";
import styles from "./Banner.module.css";

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
        <TopMenu />
        <div className={styles.meLeftContainer}>
          <div className={styles.meImageContainer}>
            <Image
              className={styles.meImage}
              alt="Eliska"
              src="/../public/images/eli.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
            />
          </div>
        </div>
        <div className={styles.meRightContainer}>
          <h1>
            Hi! I am <br /> Eliška Bartošová
          </h1>
          <div className={styles.divider}></div>
          <h2>frontend developer</h2>
          <div className={styles.meButtonContainer}>
            <Button
              buttonText="download my resume"
              onClick={() => {}}
              buttonHorizontalPadding="16px"
            />
          </div>
        </div>
      </BannerContainer>
    </>
  );
};
