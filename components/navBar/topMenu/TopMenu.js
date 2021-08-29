import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./TopMenu.module.css";

export const TopMenu = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <div className={styles.navMobile}>
        <Link href="/" passHref>
          <div className={styles.logoContainer}>
            <Image
              className={styles.logoImage}
              alt="Eli logo"
              src="/../public/images/EliBTransp.svg"
              layout="fixed"
              objectPosition="center"
              width="40"
              height="25"
            />
          </div>
        </Link>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpened(true)}
        >
          <div className={styles.hamburgerContainer}>
            <Image
              className={styles.hamburgerImage}
              alt="Menu"
              src="/../public/images/menu.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
            />
          </div>
        </button>
      </div>
      {menuOpened && (
        <div className={styles.navMobileOpen}>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpened(false)}
          >
            <div className={styles.closeMenuContainer}>
              <Image
                className={styles.hamburgerImage}
                alt="Menu"
                src="/../public/images/close.png"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </button>
          <Link href="#about" passHref>
            <a>About me</a>
          </Link>
        </div>
      )}
    </>
  );
};
