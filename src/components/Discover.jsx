import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
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
    <Section title="Calculación de impuestos" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          En{" "}
          <strong className="font-semibold text-neutral-950">GUITRA</strong>, 
          entendemos la importancia de simplificar el proceso de cálculo de impuestos. 
          Nuestro servicio de calculación de impuestos está diseñado para proporcionar una 
          solución eficiente y precisa para tus necesidades fiscales. 
          A continuación, destacamos las características clave de nuestro servicio:
        </p>
        <p>
          {" "}
          <strong className="font-semibold text-neutral-950">1. Rapidez y Precisión: </strong>
          Realizamos cálculos de impuestos de manera rápida y precisa, permitiéndote obtener los resultados 
          que necesitas en cuestión de segundos. No más preocupaciones por errores en los cálculos; nuestro 
          sistema está diseñado para ofrecer resultados confiables.
        </p>
        <p>
        {" "}
          <strong className="font-semibold text-neutral-950">2. Actualizaciones en Tiempo Real con el SAT: </strong>
          Nuestro servicio se mantiene siempre actualizado con las últimas regulaciones fiscales 
          mediante una integración directa con el portal del Servicio de Administración Tributaria (SAT). 
          Esto garantiza que todos los cálculos estén en conformidad con las normativas fiscales más 
          recientes.
        </p>
        <p>
        {" "}
          <strong className="font-semibold text-neutral-950">3. Asistencia y Soporte: </strong>
          Si tienes alguna pregunta o necesitas ayuda durante el proceso, nuestro equipo de soporte 
          está aquí para ayudarte. Brindamos asistencia personalizada para garantizar que tengas una 
          experiencia sin contratiempos al utilizar nuestro servicio.
        </p>
        <a href="https://mx.talent.com/tax-calculator" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
          Calcular impuestos
        </a>
      </div>
    </Section>
  );
};

export default Discover;
