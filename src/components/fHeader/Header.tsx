import React, { useState } from "react";
import styles from "../../styles/sHome/Header.module.scss";

const Header = () => {
  // Definir estado para controlar las vistas
  const [welcomeScreen, setWelcomeScreen] = useState(true);

  // Función que cambia la vista al presionar "Continuar"
  const handleContinue = () => {
    setWelcomeScreen(false);
  };

  return (
    <section className={styles.globalHeader}>
      {welcomeScreen ? (
        // Vista de bienvenida
        <div className={styles.welcomeScreen}>
          <h1>Bienvenido al sistema de rastreo de Landsat</h1>
          <button className={styles.continueButton} onClick={handleContinue}>
            Continuar
          </button>
        </div>
      ) : (
        // Siguiente vista/pestaña que se muestra después de "Continuar"
        <div className={styles.nextScreen}>
          <h2>Segunda pestaña</h2>
          <p>Ahora estás en la segunda pestaña del sistema de rastreo de Landsat.</p>
          {/* Puedes agregar aquí más contenido o funcionalidades */}
        </div>
      )}
    </section>
  );
};

export default Header;
