import React from "react";
import styles from "../../styles/sHome/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.section}>
        <h1>RogerNatividad</h1>
        <div className={styles.conte}>
          <p>Bienvenido al Tutorial</p>
          <a href="#">Crear Cuenta</a>
          <a href="#">Ingresar</a>
        </div>
      </section>
    </header>
  );
};

export default Header;
