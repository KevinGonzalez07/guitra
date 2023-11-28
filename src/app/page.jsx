import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Realiza tus tramites con nosotros!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          Somos un grupo de contadores que estudiamos en el Tecnologico de Matamoros,
          dispuestos a ofrecer nuestros conocimientos a la sociedad.
          </p>
        </FadeIn>
      </Container>
      <Services />
      <ContactSection />
    </main>
  );
}
