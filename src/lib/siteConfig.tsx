import { FaBlog, FaRss } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaX } from "react-icons/fa6";

export const ANIMATION_DELAY = 50;

export const SITE_CONFIG = {
  id: "",
  title: "Restronaut.Ai",
  description: "",

  colors: {
    primary: { light: "#d70000", dark: "#d70000" },
    primaryForeground: { light: "#ffdbdb", dark: "#ffdbdb" }
  }
} as const;

export type SiteLink = {
  label: string;
  href: string;
  icon?: React.ReactElement;
};

export const SITE_LINKS = {
  navlinks: {
    title: "Primary Pages",
    links: [
      { label: "Home", href: "/#/" },
      { label: "Services", href: "/#/services" },
      { label: "Features", href: "/#/features" },
      { label: "FAQs", href: "/#/faqs" },
      { label: "Contact Us", href: "/contact-us" }
    ] as Array<SiteLink>
  },
  resourcesLink: {
    title: "Resources",
    links: [
      { label: "Terms & Services", href: "/#/terms" },
      { label: "Privacy Policy", href: "/#/privacy" }
    ] as Array<SiteLink>
  },
  extraLinks: {
    title: "Extras",
    links: [
      { label: "Blogs", href: "/#/blogs", icon: <FaBlog /> },
      { label: "RSS", href: "/#/rss", icon: <FaRss /> }
    ] as Array<SiteLink>
  }
} as const;

export const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/restronaut_ai", icon: <FaX /> },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/company/restronaut-ai/",
    icon: <FaLinkedin />
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/restronaut.ai",
    icon: <FaInstagram />
  }
];
