import React, { useState } from "react";
import styles from "../../styles/sHome/Header.module.scss";
import { useRouter } from "next/router"; // Importa useRouter para cambiar de página

const Header = () => {
  const [welcomeScreen, setWelcomeScreen] = useState(true);
  const router = useRouter(); // Instancia de useRouter

  const handleContinue = () => {
    router.push("/next-page"); // Cambia de página al hacer clic en "Continuar"
  };

  return (
    <section className={styles.globalHeader}>
      {welcomeScreen ? (
        <div className={styles.welcomeScreen}>
          <h1 className={styles.welcomeText}>Welcome to the Landsat Tracking System</h1>
          <button className={styles.continueButton} onClick={handleContinue}>
            Continue
          </button>
        </div>
      ) : (
        <div className={styles.nextScreen}>
          <h2>Second Screen</h2>
          <p>Now you are on the second page of the Landsat Tracking System.</p>
        </div>
      )}
    </section>
  );
};

export default Header;
