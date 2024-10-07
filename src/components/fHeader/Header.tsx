import React from "react";
import styles from "./Header.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import logo from "../public/Logo.png";

const Header: React.FC = () => {
  return (
    <header className={styles.globalHeader}>
      <section>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={50}
            className={styles.Logo}
          />
        </Link>
        <div className={styles.container}>
          <h1 className={styles.title}>SPACE APP CHALLENGE</h1>
          <div className={styles.nextScreen}>
            <p>Welcome LANDSTAT</p>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;