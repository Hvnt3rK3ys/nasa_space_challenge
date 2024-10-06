import React from 'react';
import styles from "../../styles/sExploreData/DownloadData.module.scss";

interface DownloadDataProps {
  className?: string;
}

const DownloadData: React.FC<DownloadDataProps> = ({ className }) => {
  return (
    <section className={`${styles.globalDownload} ${className}`}>
      <h1>Aqui va el boton de descarga</h1>
    </section>
  );
};

export default DownloadData;
