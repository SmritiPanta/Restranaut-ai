import * as React from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue } from "tailwind-variants";
import Link, { type LinkProps } from "next/link";

import { Container } from "@/components/Container";
import { Button, type ButtonProps } from "@/components/Button";
import { ANIMATION_DELAY } from "@/lib/siteConfig";
import Image from "next/image";
import transform from "@/../public/transform.png";

function getExtension(src: string) {
  const imageExtensions = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "bmp",
    "webp",
    "svg",
    "tiff",
    "ico",
    "avif"
  ];
  const videoExtensions = [
    "mp4",
    "avi",
    "mov",
    "wmv",
    "flv",
    "mkv",
    "webm",
    "mpeg"
  ];

  const ext = src.split(".").pop()?.toLowerCase();
  if (!ext) return "other";
  if (imageExtensions.includes(ext)) return "image";
  if (videoExtensions.includes(ext)) return "video";

  return "other";
}

export type Service = {
  title: string;
  description: string;
  points?: Array<string>;
  icon?: React.ReactElement;
  asset: { src: string; alt?: string; [x: string]: unknown };
  actions?: Array<ButtonProps & LinkProps & { label: string }>;
};

export type ServicesSectionProps = {
  services: Array<Service>;
  classes?: { root?: ClassValue };
};

export default function ServicesSection({
  services,
  classes
}: ServicesSectionProps) {
  return (
    <div>
      <section
        id="/services"
        className={twMerge("py-16 bg-background scroll-mt-16", classes?.root)}>
        <Container className=" text-center space-y-8">
          <h2 className="text-4xl lg:text-4xl font-bold lg:tracking-tight">
            What We Do for You: Simplifying Your Success,
            <br />
            One Solution at a Time
          </h2>
        </Container>
        <Container className="bg-muted border mt-16 lg:rounded-lg overflow-x-clip">
          {services.slice(0, 2).map((service, idx) => (
            <div
              key={idx}
              className={twMerge(
                "group flex flex-col md:flex-row  justify-center items-center py-10 gap-x-12 lg:gap-x-16",
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}>
              <div className="grid">
                <div className="max-w-lg">
                  <div className="shrink-0 [&_svg]:size-16 text-muted-foreground mt-8 md:mt-4">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold mt-4 text-balance">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-foreground/85 text-balance">
                    {service.description}
                  </p>

                  {service.points?.length ? (
                    <ul className="grid mt-6 text-left gap-y-4 list-disc list-inside">
                      {service.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-foreground/80"
                          data-aos="fade-in"
                          data-aos-delay={(idx + 1) * ANIMATION_DELAY}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>

              <div className="grid place-items-center" data-aos="fade-right">
                {getExtension(service.asset.src) === "image" ? (
                  <Image
                    src={service.asset.src}
                    alt={service.asset.alt || "Service image"}
                    width={379}
                    height={379}
                    className="rounded-lg"
                  />
                ) : null}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section
        id="/services"
        className={twMerge("py-16 bg-background scroll-mt-16", classes?.root)}>
        <Container className=" text-center space-y-8">
          <h2 className="text-4xl lg:text-4xl font-bold lg:tracking-tight">
            Your Brand, Your Website
            <br />
            Make yourself stand-out in the Competition
          </h2>
        </Container>
        <Container className="bg-muted border mt-16 lg:rounded-lg overflow-x-clip">
          {services.slice(2, 4).map((service, idx) => (
            <div
              key={idx}
              className={twMerge(
                "group flex flex-col md:flex-row justify-center items-center py-10 gap-x-12 lg:gap-x-16",
                idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              )}>
              <div className="grid place-items-center" data-aos="fade-right">
                {getExtension(service.asset.src) === "image" ? (
                  <Image
                    src={service.asset.src}
                    alt={service.asset.alt || "Service image"}
                    width={379}
                    height={379}
                    className="rounded-lg"
                  />
                ) : null}
              </div>
              <div className="grid">
                <div className="max-w-lg">
                  <div className="shrink-0 [&_svg]:size-16 text-muted-foreground mt-8 md:mt-4">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold mt-4 text-balance">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-foreground/85 text-balance">
                    {service.description}
                  </p>

                  {service.points?.length ? (
                    <ul className="grid mt-6 text-left gap-y-4 list-disc list-inside">
                      {service.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-foreground/80"
                          data-aos="fade-in"
                          data-aos-delay={(idx + 1) * ANIMATION_DELAY}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section
        id="/services"
        className={twMerge("py-16 bg-background scroll-mt-16", classes?.root)}>
        <Container className=" text-center space-y-8">
          <h2 className="text-4xl lg:text-4xl font-bold lg:tracking-tight">
            AI-Driven Marketing <br />
            Precision Campaigns at your Fingertips
          </h2>
        </Container>
        <Container className="bg-muted  border mt-16 lg:rounded-lg overflow-x-clip">
          {services.slice(4, 7).map((service, idx) => (
            <div
              key={idx}
              className={twMerge(
                "group flex flex-col md:flex-row  justify-center items-center py-10 gap-x-12 lg:gap-x-16",
                idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              )}>
              <div className="grid">
                <div className="max-w-lg">
                  <div className="shrink-0 [&_svg]:size-16 text-muted-foreground mt-8 md:mt-4">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold mt-4 text-balance">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-foreground/85 text-balance">
                    {service.description}
                  </p>

                  {service.points?.length ? (
                    <ul className="grid mt-6 text-left gap-y-4 list-disc list-inside">
                      {service.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-foreground/80"
                          data-aos="fade-in"
                          data-aos-delay={(idx + 1) * ANIMATION_DELAY}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>

              <div className="grid place-items-center" data-aos="fade-right">
                {getExtension(service.asset.src) === "image" ? (
                  <Image
                    src={service.asset.src}
                    alt={service.asset.alt || "Service image"}
                    width={379}
                    height={379}
                    className="rounded-lg"
                  />
                ) : null}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </div>
  );
}
