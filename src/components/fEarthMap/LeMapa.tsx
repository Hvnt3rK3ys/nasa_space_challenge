import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Importa los estilos de Leaflet
import styles from "../../styles/sHome/OurMap.module.scss";

const LeMapa = () => {
  useEffect(() => {
    // Inicialización del mapa solo después de que el componente esté montado
    const map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup("A pretty CSS popup.<br> Easily customizable.")
      .openPopup();

    // Limpiar el mapa cuando el componente se desmonte
    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
      <section className={styles.globalContainer}>
        <h1> PLEASE ACTIVE YOUR LOCATION </h1>
        <div id="map" style={{ height: "500px", width: "100%" }}></div> {/* Contenedor para el mapa */}
      </section>
    </>
  );
};

export default LeMapa;

