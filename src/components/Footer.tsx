import Link from "next/link";
import * as React from "react";
import { twMerge } from "tailwind-merge";
import type { ClassValue } from "tailwind-variants";

import { Button } from "@/components/Button";
import { AppLogo } from "@/components/AppLogo";
import { Container } from "@/components/Container";
import { ANIMATION_DELAY, SITE_LINKS, SOCIAL_LINKS } from "@/lib/siteConfig";

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
      {/*<svg
        viewBox="0 0 1600 99"
        className={twMerge("w-full bg-muted fill-background", classes?.curve)}>
        <path d="M0 100 Q800 -50 1600 100 L1600 100 L0 100 Z" />
      </svg>*/}

      <Container className="grid lg:grid-cols-2 py-8 gap-y-8">
        <div className="flex flex-col gap-y-7" data-aos="fade-right">
          <AppLogo href="/" classes={{ text: "hover:text-primary" }} />

          <div className="lg:max-w-[416px] text-muted-foreground max-w-xl">
            An all-in-one platform built by restauranteurs, for restauranteurs,
            designed to streamline operations, enhance customer experiences, and
            drive business growth.
          </div>

          <form>
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-foreground/85 text-sm font-semibold">
                Subscribe to our newsletter
              </label>
              <div className="relative w-full max-w-md">
                <input
                  required
                  id="email"
                  type="email"
                  name="email"
                  placeholder="eg: johndoe@gmail.com"
                  className={twMerge(
                    "pl-4 h-12 text-sm font-medium placeholder-muted-foreground w-full max-w-md py-2 rounded-xl bg-muted border-0 ring ring-border focus:ring-2 focus:ring-primary focus:outline-none pe-30",
                    classes?.input
                  )}
                />
                <Button className="absolute right-1 top-1">Subscribe</Button>
              </div>
              <small className="text-muted-foreground">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </small>
            </div>
          </form>
        </div>

        <div
          className="flex flex-col gap-y-7 lg:ms-auto"
          data-aos="fade-left"
          data-aos-delay="300">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Object.keys(SITE_LINKS).map((siteGroup, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-y-4"
                data-aos="fade-left"
                data-aos-delay={idx * ANIMATION_DELAY}>
                <h1 className="text-xl font-semibold capitalize">
                  {SITE_LINKS[siteGroup as keyof typeof SITE_LINKS].title}
                </h1>
                <div className="flex flex-col gap-y-[10px] capitalize">
                  {SITE_LINKS[siteGroup as keyof typeof SITE_LINKS]?.links.map(
                    (link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="hover:opacity-100 underline-offset-4 opacity-70 transition-all duration-300 ease-linear inline-flex items-center gap-2">
                        {link.icon}
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-2">
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
          </div>
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
