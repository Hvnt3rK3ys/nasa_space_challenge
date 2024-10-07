import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import styles from './OurMap.module.scss';

const MapComponent: React.FC<{ anchor: [number, number] }> = ({ anchor }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('leaflet').then(L => {
        // Crear el mapa y establecer la vista inicial
        const map = L.map(mapRef.current!).setView(anchor, 13);

        // Añadir una capa de mapa de OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Crear un ícono personalizado usando FontAwesome
        const customIcon = L.divIcon({
          className: 'custom-icon',
          html: '<i class="fa fa-map-marker-alt"></i>', // Usar el ícono de FontAwesome
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });

        // Añadir un marcador con el ícono personalizado
        L.marker(anchor, { icon: customIcon }).addTo(map)
          .bindPopup('Ubicacion (...)')
          .openPopup();
      });
    }
  }, [anchor]);

  return <div ref={mapRef} className={styles.map}></div>;
};

const Map = dynamic(() => Promise.resolve(MapComponent), { ssr: false });

export default Map;
