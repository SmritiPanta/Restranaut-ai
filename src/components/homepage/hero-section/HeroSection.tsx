"use client";
import Link from "next/link";
import * as React from "react";
import { GradientScene } from "./GradientScene";
import { Container } from "@/components/Container";
import { Button, type ButtonProps } from "@/components/Button";

// const gradientColors = ["#FF758C", "#7A691E", "#311EFF", "#9B009B"];

type HeroSectionProps = {
  id?: string;
  title: string;
  description: string | React.ReactElement;

  gradientColors: string[];
  actions?: Array<ButtonProps & { href?: string }>;
  children?: React.ReactNode;
  rightContent?: React.ReactElement;
};

export default function HeroSection({
  title,
  description,
  actions,
  gradientColors,
  children,
  rightContent
}: HeroSectionProps) {

  return (
    <section
      id="/"
      className="relative px-4 pt-4 overflow-hidden">
      <Container className="grid lg:grid-cols-2 pt-32 pb-16 sm:pt-48 md:py-52 gap-8 lg:gap-16 z-10">

        <div className="dark">
          <h1
            className="text-5xl font-medium tracking-tight text-foreground sm:text-7xl text-balance"
            data-aos="fade-right">
            {title}
          </h1>

          {typeof description === "string" ? (
            <p
              className="mt-6 text-xl text-foreground/70 md:font-medium text-pretty"
              data-aos="fade-right"
              data-aos-delay="200">
              {description}
            </p>
          ) : (
            description
          )}

          {actions?.length >= 0 && (
            <div
              className="flex flex-col md:flex-row py-8 gap-4"
              data-aos="fade-right"
              data-aos-delay="300">
              {actions.map(({ href = "#", children, ...restProps }, idx) => (
                <Button key={idx} {...restProps} asChild>
                  <Link href={href}>{children}</Link>
                </Button>
              ))}
            </div>
          )}
        </div>

        {rightContent}
      </Container>

        <GradientScene className="inset-4 rounded-lg" colors={gradientColors} />
      {children}
    </section>
  );
}
