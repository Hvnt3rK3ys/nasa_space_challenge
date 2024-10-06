import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.section}>
        <div className={styles.conte}>
          <p>WELCOME LANDSAT</p>
          <p>Explora lo desconocido</p> 
          <a href="#" class="boton-redireccion">STAR</a>
        </div>
      </section>
    </header>
  );
};

export default Header;
