import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Servicios"
        title="Nosotros podremos ayudar en varios servicios financieros"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Conoce todos nuestros servicios financieros, estaremos dispuestos a ayudarte
          en lo que mejor hacemos.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Calculación de impuestos">
              Nuestros especialistas implementaron una sección de servicios rapidos
              donde podras calcular impuestos que necesites. 
            </ListItem>
            <ListItem title="Calculación de finiquitos">
              Dentro de nuestros servicios rapidos podras calcular finiquitos en México,
              herramienta esencial para empresas o trabajadores.
            </ListItem>
            <ListItem title="Calculación de aguinaldos">
              Nuestro sistema busca ayudar a toda la sociedad, por eso tambien ofrecemos
              ayudarte a saber tu aguinaldo que por ley te corresponde.
            </ListItem>
            <ListItem title="Servicios especializados">
              Si necesitas servicios mas especializados para tu negocio o personal. 
              Podras contactar a nuestros especialistas para tener un servicio personalizado.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
