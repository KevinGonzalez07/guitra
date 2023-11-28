import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsYoutube,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@tecnminstitutotecnologicod7232",
    icon: BsYoutube,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61550859484724&mibextid=ZbWKwL",
    icon: BsFacebook,
  },
  {
    title: "Instagram",
    href: "https://instagram.com/guitramx?igshid=YzAwZjE1ZTI0Zg==",
    icon: BsInstagram,
  },

];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
