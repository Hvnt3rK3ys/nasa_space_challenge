import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import styles from './OurMap.module.scss';

const MapComponent: React.FC<{ anchor: [number, number] }> = ({ anchor }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');

      // Crear el mapa y establecer la vista inicial
      const map = L.map(mapRef.current!).setView(anchor, 13);

      // Añadir una capa de mapa de OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Crear un ícono personalizado usando un SVG
      const customIcon = L.divIcon({
        className: 'custom-icon',
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>`,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      // Añadir un marcador con el ícono personalizado
      L.marker(anchor, { icon: customIcon }).addTo(map)
        .bindPopup('Ubicacion (...)')
        .openPopup();
    }
  }, [anchor]);

  return <div ref={mapRef} className={styles.map}></div>;
};

const Map = dynamic(() => Promise.resolve(MapComponent), { ssr: false });

export default Map;
