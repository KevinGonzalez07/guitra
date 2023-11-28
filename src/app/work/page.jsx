import PageIntro from "@/components/PageIntro";
import React from "react";

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Nuestro trabajo"
        title="Facilitamos tus Trámites!"
      >
        <p style={{ textAlign: 'justify' }}>
        Somos un grupo de estudiantes de la carrera de Contador Público en el Instituto Tecnológico 
        de Matamoros, comprometidos en proporcionar orientación sobre la documentación y el proceso 
        para llevar a cabo diversos trámites. En base a nuestra experiencia, hemos identificado la 
        carencia de información, y nuestro objetivo es cubrir esta necesidad tanto en jóvenes como en 
        adultos de todas las edades. Estamos aquí para brindar asesoramiento y facilitar el acceso a la 
        información necesaria para realizar trámites de manera efectiva.
        </p>
      </PageIntro>
    </>
  );
};

export default WorkPage;
