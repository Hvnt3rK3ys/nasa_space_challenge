import React from 'react';
import styles from '../styles/not.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import my_asset from "../public/Logo.png"

const Logo: React.FC = () => {
  return (
    <main className={styles.LogoImg}>
      <Link href="/" prefetch={false}>
        <h1 className={styles.Tecknocrafters}>Tecknocrafters</h1>
        <Image
          src={my_asset} 
          alt="Logo"
          width={700}
          height={700}
          className={styles.LogoTecknocrafters}
        />
      </Link>
    </main>
  );
};

export default Logo;
