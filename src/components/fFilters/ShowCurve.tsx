import React from "react";
import styls from "../../styles/sHome/F_Curve.module.scss";

interface ShowCurveProps {
  className?: string;
}

const ShowCurve: React.FC<ShowCurveProps> = ({ className }) => {
  return (
    <section className={`${styls.globalCurve} ${className}`}>
      Aquí va la curva
    </section>
  );
};

export default ShowCurve;
