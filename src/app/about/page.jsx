import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="Sobre nosotros" title="Nuestra fuerza es la colaboración">
        <p>
        ¿Por qué elegir nuestros servicios financieros?
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
        <p>
          Profesionalismo y Conocimiento: Aunque somos estudiantes, estamos respaldados 
          por una sólida formación académica y un profundo entendimiento de los principios 
          contables y financieros.
          </p>
          <p>
          Precios Competitivos: Entendemos que las finanzas pueden ser un campo costoso. 
          Es por eso que ofrecemos tarifas competitivas para que obtengas la ayuda que 
          necesitas sin quebrar tu presupuesto.
          </p>
          <p>
          Atención Personalizada: Cada cliente es único, y así es como tratamos a cada uno. 
          Nos enfocamos en tus necesidades específicas y te proporcionamos soluciones personalizadas.
          </p>
          <p>
          Mantente Informado: A través de nuestro blog, te mantendremos al tanto de las últimas noticias 
          y tendencias financieras, lo que te permitirá tomar decisiones informadas.
          </p>
          <p>
          Ética y Transparencia: Valoramos la ética y la transparencia en todos nuestros servicios. 
          Puedes confiar en nosotros para manejar tus asuntos financieros con la máxima integridad.
          </p>
        </div>
      </PageIntro>
      <ContactSection />
    </>
  );
};

export default AboutPage;
