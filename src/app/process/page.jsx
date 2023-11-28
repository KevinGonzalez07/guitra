import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Servicios" title="¿Comó te ayudamos?">
        <p style={{ textAlign: 'justify' }}>
        Brindamos estos servicios de forma rápida para que puedas obtener tus cálculos al instante. 
        Creemos que tu confianza es primordial, por lo que nuestros procedimientos se actualizan 
        constantemente de acuerdo con el portal del SAT, garantizando así un servicio siempre a la vanguardia.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      {/* Values */}
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
