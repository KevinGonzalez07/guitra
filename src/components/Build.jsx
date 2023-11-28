import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#000', // Fondo negro
    color: '#fff', // Texto blanco
    textDecoration: 'none',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  };
  return (
    <Section title="Liquidación de finiquitos" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Comprendemos la importancia de simplificar el proceso de cálculo de finiquitos. 
        Nuestro servicio especializado está diseñado para proporcionar una solución eficiente 
        y precisa para tus necesidades de liquidación laboral. A continuación, destacamos 
        las características clave de nuestro servicio:
        </p>
        <p>
        <strong className="font-semibold text-neutral-950">1. Adaptabilidad a Normativas Vigentes: </strong>
        Mantenemos nuestro servicio actualizado con las últimas regulaciones laborales, 
        asegurándonos de que los cálculos de finiquitos estén en conformidad con las leyes 
        y disposiciones más recientes. Esta adaptabilidad garantiza la precisión y legalidad 
        de cada cálculo.
        </p>
        <p>
        <strong className="font-semibold text-neutral-950">2. Información Clara y Detallada: </strong>
        Proporcionamos informes claros y detallados que desglosan cada componente del 
        finiquito. Esto facilita la comprensión tanto para empleadores como para empleados, 
        asegurando una comunicación transparente en todo el proceso.
        </p>
        <p>
        Simplifica el proceso de liquidación laboral con <strong className="font-semibold text-neutral-950">GUITRA</strong>. Nuestra calculadora de 
        finiquitos en línea es la herramienta ideal para gestionar este aspecto crítico de los 
        recursos humanos. ¡Inicia hoy mismo y asegúrate de que cada finiquito se realice con 
        precisión y cumplimiento legal!
        </p>
        <a href="https://calculadorasat.mx/finiquito/" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
          Calcular finiquito
        </a>
      </div>
    </Section>
  );
};

export default Build;
