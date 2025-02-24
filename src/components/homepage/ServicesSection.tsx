import * as React from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue } from "tailwind-variants";
import Link, { type LinkProps } from "next/link";

import { Container } from "@/components/Container";
import { Button, type ButtonProps } from "@/components/Button";
import { ANIMATION_DELAY } from "@/lib/siteConfig";

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
    <section
      id="/services"
      className={twMerge("py-16 bg-background scroll-mt-16", classes?.root)}>
      <Container className="bg-muted border lg:rounded-lg overflow-x-clip">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group grid md:grid-cols-2 py-10 gap-x-12 lg:gap-x-16">
            <div
              className="grid place-items-center group-even:md:order-2"
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}>
              {getExtension(service.asset.src) === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  className="rounded-lg border shadow-xs">
                  <source {...service.asset} type="video/mp4" />
                </video>
              ) : null}
            </div>
            <div className="grid">
              <div className="max-w-lg">
                <div className="shrink-0 [&_svg]:size-16 text-muted-foreground mt-8 md:mt-4">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-medium mt-4 text-balance">
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

                {service.actions?.length && (
                  <div className="flex items-center gap-4 mt-6">
                    {service.actions.map(
                      ({ label, href = "#", ...restProps }, idx) => (
                        <Button key={idx} {...restProps} asChild>
                          <Link href={href}>{label}</Link>
                        </Button>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
