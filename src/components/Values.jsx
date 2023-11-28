import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Servicios personalizados"
        title="Servicios Especializados a tu Medida: Descubre lo que Tenemos para Ofrecerte"
      >
        <p style={{ textAlign: 'justify' }}>
        Además de nuestros servicios rápidos, nos especializamos en ofrecer soluciones 
        personalizadas. Simplemente accede a nuestro menú de contacto, y estaremos encantados de 
        proporcionar servicios adaptados a tus necesidades. Algunos de los servicios especializados 
        que ofrecemos incluyen:
        </p>
      </SectionIntro>
      <Container className="mt-14 mb-24">
        <GridList>
          <GridListItem title="Contabilidad General">
          Nos ocupamos del cuidado meticuloso de tus libros 
          contables, asegurándonos de mantener un registro preciso y detallado de todas las transacciones 
          financieras. 
          </GridListItem>
          <GridListItem title="Declaraciones de Impuestos">
          Nos encargamos de la preparación y presentación de tus declaraciones fiscales, 
          asegurándonos de cumplir con todas las obligaciones tributarias de manera precisa.
          </GridListItem>
          <GridListItem title="Asesoría Financiera">
          Ofrecemos servicios de planificación financiera tanto a nivel personal 
          como empresarial, asegurando un enfoque estratégico para tus metas financieras.
          </GridListItem>
          <GridListItem title="Auditoría Interna">
          Implementamos medidas para fortalecer tus controles internos, 
          garantizando la seguridad y eficiencia de tus procesos.
          </GridListItem>
          <GridListItem title="Nómina y Recursos Humanos">
          Nos especializamos en el cálculo preciso de nóminas, garantizando la exactitud en 
          la compensación de tus empleados. 
          </GridListItem>
          <GridListItem title="Consultoría Contable">
          Trabajamos en el desarrollo de políticas contables adaptadas a las necesidades específicas de 
          tu empresa, proporcionando una estructura sólida para la toma de decisiones financieras. 
          </GridListItem>
        </GridList>
      </Container>
      <SectionIntro
        eyebrow=""
        title="Servicios extras"
      >
      </SectionIntro>
      <Container className="mt-10">
      <GridList>
      <GridListItem title="Consulta tu CURP">
            <a href="https://www.gob.mx/curp/" target="_blank" rel="noopener noreferrer">
              Aqui.
            </a>
          </GridListItem>
          <GridListItem title="Consulta tu RFC" >
          <a href="https://www.sat.gob.mx/aplicacion/31274/consulta-tu-clave-de-rfc-mediante-curp" target="_blank" rel="noopener noreferrer">
              Aqui.
            </a>
          </GridListItem>
          <GridListItem title="Consulta tu acta de nacimiento" >
          <a href="https://www.gob.mx/ActaNacimiento/" target="_blank" rel="noopener noreferrer">
              Aqui.
            </a>
          </GridListItem>
          <GridListItem title="Agenda una cita para INE" >
          <a href="https://app-inter.ife.org.mx/siac2011/citas_initCapturaCitas.siac" target="_blank" rel="noopener noreferrer">
              Aqui.
            </a>
          </GridListItem>
          <GridListItem title="Agenda una cita en el SAT" >
          <a href="https://citas.sat.gob.mx/" target="_blank" rel="noopener noreferrer">
              Aqui.
            </a>
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
