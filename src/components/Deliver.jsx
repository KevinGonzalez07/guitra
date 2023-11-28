import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
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
    <Section title="Calculación de aguinaldo" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Entendemos la importancia de simplificar el proceso de cálculo de aguinaldos. 
        Nuestro servicio especializado está diseñado para ofrecer una solución eficiente y precisa 
        para tus necesidades de gratificaciones anuales. A continuación, destacamos las características 
        clave de nuestro servicio:
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">1. Actualización Periódica con Cambios Legales:</strong>{" "}
          Mantenemos nuestro servicio actualizado con las últimas disposiciones legales 
          relacionadas con los aguinaldos. Esto garantiza que los cálculos estén en línea con las 
          leyes laborales más recientes, proporcionando seguridad y cumplimiento normativo.
        </p>
        <p>
        <strong className="font-semibold text-neutral-950">2. Información Clara y Accesible:</strong>{" "}
        Proporcionamos informes detallados y fácilmente comprensibles, desglosando cada 
        componente del cálculo de aguinaldos. Esto facilita la transparencia y la comunicación 
        efectiva entre empleadores y empleados en este aspecto crucial de la compensación laboral.
        </p>
        <p>
        Simplifica el proceso de cálculo de aguinaldos con <strong className="font-semibold text-neutral-950"> GUITRA</strong>. Nuestra 
        calculadora en línea es la herramienta ideal para gestionar esta importante prestación 
        laboral, asegurando una distribución equitativa y conforme a la normativa vigente. 
        ¡Comienza hoy y garantiza un proceso de aguinaldos sin complicaciones!
        </p>
        <a href="https://www.buk.mx/recursos/calculadora/calculadora-de-aguinaldo" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
          Calcular aguinaldo
        </a>
      </div>
    </Section>
  );
};

export default Deliver;
