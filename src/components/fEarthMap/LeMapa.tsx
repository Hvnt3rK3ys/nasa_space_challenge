import React from 'react';
import Map from './DynamicMap';

interface LeMapaProps {
  className?: string; // Añadimos className como una prop opcional
}

const LeMapa: React.FC<LeMapaProps> = ({ className }) => {
  return (
    <div className={className}> {/* Usamos className aquí */}
      <h1>Mapa con Leaflet</h1>
      <Map anchor={[4.7422471, -74.0284534]} />
    </div>
  );
};

export default LeMapa;
