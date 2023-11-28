import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Trabajamos con",
    links: [
      { title: "It Matamoros", href: "https://www.itmatamoros.edu.mx/" },
      {
        title: (
          <>
            Mira todo <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "GUITRA",
    links: [
      { title: "Nosotros", href: "/about" },
      { title: "Servicios", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contactanos", href: "/contact" },
    ],
  },
  {
    title: "Redes sociales",
    links: SocialMediaProfiles,
  },
];
