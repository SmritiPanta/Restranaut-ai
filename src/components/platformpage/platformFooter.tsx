import Link from "next/link";
import * as React from "react";
import { twMerge } from "tailwind-merge";
import type { ClassValue } from "tailwind-variants";

import { Button } from "@/components/Button";
import { AppLogo } from "@/components/AppLogo";
import { Container } from "@/components/Container";
import {
  ANIMATION_DELAY,
  PLATFORM_SITE_LINKS,
  SITE_LINKS,
  SOCIAL_LINKS
} from "@/lib/siteConfig";

export type FooterProps = {
  classes?: {
    // curve?: ClassValue;
    root?: ClassValue;
    input?: ClassValue;
    copyrightRoot?: ClassValue;
  };
};

export const Footer: React.FC<FooterProps> = ({ classes }) => {
  return (
    <footer
      className={twMerge(
        "relative bg-background text-foreground",
        classes?.root
      )}>
      <Container className="grid lg:grid-cols-2 py-8 gap-y-8">
        <div className="flex flex-col gap-y-7" data-aos="fade-right">
          <AppLogo href="/" classes={{ text: "hover:text-primary" }} />

          <div className="lg:max-w-[416px] text-muted-foreground max-w-xl">
            Join our newsletter to stay up to date on <br /> features and
            releases.
          </div>

          <form>
            <div className="grid gap-4">
              <div className=" flex flex-cols gap-4  ">
                <input
                  required
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className={twMerge(
                    "pl-4 h-10 text-sm font-medium placeholder-muted-foreground w-full max-w-[316px] rounded-xl bg-muted border-0 ring ring-border focus:ring-2 focus:ring-primary focus:outline-none pe-30",
                    classes?.input
                  )}
                />
                <Button className=" bg-blue-700 rounded-xl ">Subscribe</Button>
              </div>
              <small className="text-muted-foreground">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive <br />
                updates from our company.
              </small>
            </div>
          </form>
        </div>

        <div
          className="flex flex-col gap-y-7 lg:ms-auto"
          data-aos="fade-left"
          data-aos-delay="300">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Object.keys(PLATFORM_SITE_LINKS).map((siteGroup, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-y-4"
                data-aos="fade-left"
                data-aos-delay={idx * ANIMATION_DELAY}>
                <h1 className="text-xl font-semibold capitalize">
                  {
                    PLATFORM_SITE_LINKS[
                      siteGroup as keyof typeof PLATFORM_SITE_LINKS
                    ].title
                  }
                </h1>
                <div className="flex flex-col gap-y-[10px] capitalize">
                  {PLATFORM_SITE_LINKS[
                    siteGroup as keyof typeof PLATFORM_SITE_LINKS
                  ]?.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="hover:opacity-100 underline-offset-4 opacity-70 transition-all duration-300 ease-linear inline-flex items-center gap-2">
                      {link.icon}
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="grid gap-2">
            <div className="text-foreground/85 text-sm font-semibold">
              Follow us on:
            </div>
            <div className="inline-flex items-center gap-4">
              {SOCIAL_LINKS.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  className="inline-flex [&_svg]:size-6 text-muted-foreground hover:text-foreground">
                  {link.icon}
                </a>
              ))}
            </div>
          </div> */}
        </div>
      </Container>

      <div className={twMerge("bg-muted border-t", classes?.copyrightRoot)}>
        <Container className="py-2 flex flex-col md:flex-row items-center justify-between text-muted-foreground text-sm font-medium">
          <span>
            &copy; Copyright {new Date().getFullYear()} Restronaut Technologies.
            All rights reserved.
          </span>
          <div className="inline-flex items-center gap-2">
            <Link href="/" className="hover:underline hover:text-primary">
              Terms & Services
            </Link>
            <div className="size-1 bg-foreground/50 rounded-full shrink-0" />
            <Link href="/" className="hover:underline hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
};
