import React, { useState } from "react";
import { useRouter } from "next/router"; // Si estás usando Next.js
import styles from "./Header.module.scss"; // Asegúrate de tener los estilos

const Header = () => {
  const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);
  const router = useRouter(); // Si estás usando Next.js, para manejar la navegación

  const handleLogin = () => {
    router.push("/login"); // Simula una navegación al hacer clic en "Ingresar"
  };

  const handleCreateAccount = () => {
    router.push("/create-account"); // Simula una navegación al hacer clic en "Crear Cuenta"
  };

  return (
    <header className={styles.globalHeader}>
      <section>
        <h1 className={styles.title}>SPACE APP CHALLENGE</h1>
        <div className={styles.container}>
          <p>Welcome LANDSTAT</p>
          <button className={styles.button} onClick={handleLogin}>Ingresar</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
