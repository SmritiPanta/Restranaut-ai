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
      { label: "PlatForm", href: "/platform-page" },
      { label: "About", href: "/about-page" },
      { label: "Features", href: "/#/features" },
      { label: "FAQs", href: "/#/faqs" },
      { label: "Pricing", href: "/pricing" },
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

export const PLATFORM_SITE_LINKS = {
  navlinks: {
    title: "Platform",
    links: [{ label: "Pricing", href: "/pricing" }] as Array<SiteLink>
  },
  CompanyLink: {
    title: "Resources",
    links: [
      { label: "About", href: "/#/about" },
      { label: "Contact", href: "/#/contact-us" },
      { label: "Social", href: "/#/social" }
    ] as Array<SiteLink>
  },
  extraLinks: {
    title: "Follow us on:",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/restronaut.ai" },
      { label: "Twitter (X)", href: "https://www.twitter.com/restronaut.ai" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/restronaut-ai/"
      }
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
