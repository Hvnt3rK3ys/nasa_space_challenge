import React from 'react';

interface LeMapaProps {
  className?: string;
}

const LeMapa: React.FC<LeMapaProps> = ({ className }) => {
  return (
    <div className={className}>LeMapa</div>
  );
}

export default LeMapa;
