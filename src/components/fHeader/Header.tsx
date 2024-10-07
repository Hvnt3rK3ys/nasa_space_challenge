import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`${styles.globalHeader} ${className}`}>
      <section>
        <h1 className={styles.title}>SPACE APP CHALLENGE</h1>
        <div className={styles.container}>
          <p>Welcome LANDSTAT</p>
        </div>
      </section>
    </header>
  );
};

export default Header;

