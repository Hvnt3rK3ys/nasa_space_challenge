import React from 'react';
import Map from './DynamicMap';

const App: React.FC = () => {
  return (
    <div>
      <h1>Mapa con Leaflet</h1>
      <Map anchor={[4.7422471, -74.0284534]} />
    </div>
  );
};

export default App;